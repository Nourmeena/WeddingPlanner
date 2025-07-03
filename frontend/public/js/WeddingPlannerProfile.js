async function fetchWeddingPlannerData() {
    try {
        const response = await fetch('../WeddingPlannerProfilesData.json');
        const data = await response.json();
        const selectedId = localStorage.getItem('SelectedPerson');
        const selectedWeddingPlanner = data.find(p => p.id === selectedId);

        if (selectedWeddingPlanner) {
            displayWeddingPlanner(selectedWeddingPlanner);
        } else {
            console.error('Selected WeddingPlanner not found in data.');
        }
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
    }
}

function displayWeddingPlanner(WeddingPlanner) {
    document.title = WeddingPlanner.name;

    const profileContainer = document.getElementById('WeddingPlannerProfile');
    const albumsHtml = WeddingPlanner.albums.map(album => {
        const photosHtml = album.photos.map(photo => `
            <a href="${photo}" data-lightbox="${album.title}" data-title="${album.title}" style="display: none;"></a>
        `).join('');

        return `
            <div class="album-container">
                <a href="${album.photos[0]}" data-lightbox="${album.title}" data-title="${album.title}">
                    <img src="${album.cover}" alt="${album.title}" class="album-cover">
                    <span class="overlay">View Album</span>
                </a>
                ${photosHtml}
            </div>
        `;
    }).join('');

    profileContainer.innerHTML = `
        <div class="WeddingPlanner-info">
            <img src="${WeddingPlanner.image}" alt="${WeddingPlanner.name}" class="WeddingPlanner-image">
            <div class="social-media">
                <h2>${WeddingPlanner.name}</h2>
                <div class="social-media-content">
                    <a href="${WeddingPlanner.instagram}" target="_blank">
                        <img src="../img/SocialMediaIcons/instagram.png" alt="Instagram">
                        <span>${WeddingPlanner.instagram}</span>
                    </a>
                </div>
                <div class="social-media-content">
                    <a href="${WeddingPlanner.facebook}" target="_blank">
                        <img src="../img/SocialMediaIcons/facebook.png" alt="Facebook">
                        <span>${WeddingPlanner.facebook}</span>
                    </a>
                </div>
                <div class="social-media-content">
                    <a href="mailto:${WeddingPlanner.email}">
                        <img src="../img/SocialMediaIcons/gmail.png" alt="Gmail">
                        <span>${WeddingPlanner.email}</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="decorations">
            <h3>My Wedding Decor</h3>
            <div class="album-gallery">
                ${albumsHtml}
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

    setupPagination();
}

function setupPagination() {
    const items = document.querySelectorAll('.album-container');
    const itemsPerPage = 12; // Maximum 12 albums per page (4 albums per line * 3 lines)
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

fetchWeddingPlannerData();
