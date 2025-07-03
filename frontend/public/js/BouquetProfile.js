async function fetchBouquetData() {
    try {
        const response = await fetch('../BouquetProfilesData.json');
        const data = await response.json();
        const selectedId = localStorage.getItem('SelectedPerson');
        const selectedBouquet = data.find(b => b.id === selectedId);

        if (selectedBouquet) {
            displayBouquet(selectedBouquet);
            setupPagination();
        } else {
            console.error('Selected bouquet not found in data.');
        }
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
    }
}

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
function displayBouquet(bouquet) {
    document.title = bouquet.name;

    const profileContainer = document.getElementById('BouquetProfile');
    const albumsHtml = bouquet.albums.map(album => {
        return `
            <div class="album-container">
                <a href="${album.cover}" data-lightbox="bouquet-gallery" data-title="${bouquet.name}">
                    <img src="${album.cover}" alt="${bouquet.name}" class="album-cover">
                    <span class="overlay">View Image</span>
                </a>
                <span class="price">Price: ${album.price}</span>
                <button class="add-to-cart-btn" data-cover="${album.cover}" data-price="${album.price}">Add to Cart</button>
            </div>
        `;
    }).join('');
    
    profileContainer.innerHTML = `
        <div class="Bouquet-info">
            <img src="${bouquet.image}" alt="${bouquet.name}" class="Bouquet-image">
            <div class="social-media">
                <h2>${bouquet.name}</h2>
                <div class="social-media-content">
                    <a href="${bouquet.instagram}" target="_blank">
                        <img src="../img/SocialMediaIcons/instagram.png" alt="Instagram">
                        <span>${bouquet.instagram}</span>
                    </a>
                </div>
                <div class="social-media-content">
                    <a href="${bouquet.facebook}" target="_blank">
                        <img src="../img/SocialMediaIcons/facebook.png" alt="Facebook">
                        <span>${bouquet.facebook}</span>
                    </a>
                </div>
                <div class="social-media-content">
                    <a href="mailto:${bouquet.email}">
                        <img src="../img/SocialMediaIcons/gmail.png" alt="Gmail">
                        <span>${bouquet.email}</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="Bouquet">
            <h3>My Bridal Bouquets</h3>
            <div class="album-gallery">
                ${albumsHtml}
            </div>
        </div>


        <div class="cartTab">
            <h1>Shopping Cart</h1>
            <div class="ListCart">
                <!-- Cart -->
            </div>
            <div class="btn">
                <button class="close">CLOSE</button>
                <button class="checkOut">CHECK OUT</button>
            </div>
        </div>

        <div class="pagination"></div>
    `;


    const cartImage = document.getElementById('cart');
    const cartTab = document.querySelector('.cartTab');
    const closeBtn = document.querySelector('.close');
    const listCart = document.querySelector('.ListCart');
    const cartNumberSpan = document.getElementById('cart-number');

    cartTab.style.display = 'none';

    cartImage.addEventListener('click', () => {
        cartTab.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        cartTab.style.display = 'none';
    });


    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemCover = button.getAttribute('data-cover');
            const itemPrice = button.getAttribute('data-price');

            // Check if item already exists in cart
            const existingItem = cartItems.find(item => item.cover === itemCover);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                const newItem = {
                    cover: itemCover,
                    price: itemPrice,
                    quantity: 1
                };
                cartItems.push(newItem);
            }

            updateCartUI();
            updateCartNumber();
            saveCartToLocalStorage(); 
            button.textContent = "Added to Cart";
            setTimeout(() => {
                button.textContent = "Add to Cart";
            }, 1000); 
        });
    });


    function updateCartUI() {
        listCart.innerHTML = ''; 

        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('item');
            cartItem.innerHTML = `
                <div class="image">
                    <img src="${item.cover}" alt="Bouquet Image">
                </div>
                <div class="NAME">Bouquet</div>
                <div class="totalPrice">${item.price}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${item.quantity}</span>
                    <span class="plus">+</span>
                </div>
            `;

            const minusBtn = cartItem.querySelector('.minus');
            const plusBtn = cartItem.querySelector('.plus');

            minusBtn.addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cartItems = cartItems.filter(cartItem => cartItem.cover !== item.cover);
                }
                updateCartUI();
                updateCartNumber();
                saveCartToLocalStorage(); 
            });

            plusBtn.addEventListener('click', () => {
                item.quantity++;
                updateCartUI();
                updateCartNumber();
                saveCartToLocalStorage(); 
            });

            listCart.appendChild(cartItem);
        });
    }


    function updateCartNumber() {
        const uniqueItemsCount = cartItems.length;
        cartNumberSpan.textContent = uniqueItemsCount;
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
    }

    updateCartUI(); 
    updateCartNumber(); 

}


function setupPagination() {
    const items = document.querySelectorAll('.album-container');
    const itemsPerPage = 12;
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    function showPage(page) {
        items.forEach((item, index) => {
            item.style.display = 'none';
            if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
                item.style.display = 'block';
            }
        });
    }

    function updatePagination() {
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = '';

        const prev = document.createElement('span');
        prev.classList.add('prev');
        prev.innerHTML = '&laquo;';
        prev.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
                updatePagination();
            }
        });
        pagination.appendChild(prev);

        for (let i = 1; i <= totalPages; i++) {
            const pageNum = document.createElement('span');
            pageNum.classList.add('page-num');
            if (i === currentPage) pageNum.classList.add('active');
            pageNum.textContent = i;
            pageNum.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
                updatePagination();
            });
            pagination.appendChild(pageNum);
        }

        const next = document.createElement('span');
        next.classList.add('next');
        next.innerHTML = '&raquo;';
        next.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
                updatePagination();
            }
        });
        pagination.appendChild(next);
    }

    showPage(currentPage);
    updatePagination();
}

fetchBouquetData();
