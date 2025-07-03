async function fetchVeilDesignerData() {
    try {
        const response = await fetch('../VeilDesignerProfile.json');
        const data = await response.json();
        const selectedId = localStorage.getItem('SelectedPerson');
        const selectedDesigner = data.find(d => d.id === selectedId);

        if (selectedDesigner) {
            displayVeilDesigner(selectedDesigner);
            setupPagination();
        } else {
            console.error('Selected veil designer not found in data.');
        }
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
    }
}

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];// Load the cart items from localStorage if they exist

function displayVeilDesigner(designer) {
    document.title = designer.name;

    const profileContainer = document.getElementById('VeilDesignerProfile');
    const albumsHtml = designer.albums.map(album => {
        return `
            <div class="album-container">
                <a href="${album.cover}" data-lightbox="veil-gallery" data-title="${designer.name}">
                    <img src="${album.cover}" alt="${designer.name}" class="album-cover">
                    <span class="overlay">View Image</span>
                </a>
                <span class="price">Price: ${album.price}</span>
                <button class="add-to-cart-btn" data-cover="${album.cover}" data-price="${album.price}">Add to Cart</button>
            </div>
        `;
    }).join('');

    profileContainer.innerHTML = `
        <div class="Designer-info">
            <img src="${designer.image}" alt="${designer.name}" class="Designer-image">
            <div class="social-media">
                <h2>${designer.name}</h2>
                <div class="social-media-content">
                    <a href="${designer.instagram}" target="_blank">
                        <img src="../img/SocialMediaIcons/instagram.png" alt="Instagram">
                        <span>${designer.instagram}</span>
                    </a>
                </div>
                <div class="social-media-content">
                    <a href="${designer.facebook}" target="_blank">
                        <img src="../img/SocialMediaIcons/facebook.png" alt="Facebook">
                        <span>${designer.facebook}</span>
                    </a>
                </div>
                <div class="social-media-content">
                    <a href="mailto:${designer.email}">
                        <img src="../img/SocialMediaIcons/gmail.png" alt="Gmail">
                        <span>${designer.email}</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="VeilDesigner">
            <h3>My Veil Designs</h3>
            <div class="album-gallery">
                ${albumsHtml}
            </div>
        </div>

        <div class="cartTab">
            <h1>Shopping Cart</h1>
            <div class="ListCart">
                <!-- هنا هيتحط الـ items اللي هتتضاف للـ cart -->
            </div>
            <div class="btn">
                <button class="close">CLOSE</button>
                <button class="checkOut">CHECK OUT</button>
            </div>
        </div>

        <div class="pagination">
            <span class="prev">&laquo;</span>
            <span class="page-num active">1</span>
            <span class="page-num">2</span>
            <span class="page-num">3</span>
            <span class="page-num">4</span>
            <span class="next">&raquo;</span>
        </div>
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
            saveCartToLocalStorage();// Save the cart after every modification

            // Temporarily change the button to "Added to Cart"            
            button.textContent = "Added to Cart";
            setTimeout(() => {
                button.textContent = "Add to Cart";
            }, 1000); 
        });
    });

    function updateCartUI() {
        listCart.innerHTML = ''; // Empty the cart before updating

        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('item');
            cartItem.innerHTML = `
                <div class="image">
                    <img src="${item.cover}" alt="Veil Image">
                </div>
                <div class="NAME">Veil</div>
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
                saveCartToLocalStorage(); // Save the changes after each modification
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
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Store the cart in the localStorage
    }

    updateCartUI(); // Display the items in the cart when the page is opened
    updateCartNumber(); // Update the count when the page is opened    
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
            if (i === currentPage) {
                pageNum.classList.add('active');
            }
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


fetchVeilDesignerData();
