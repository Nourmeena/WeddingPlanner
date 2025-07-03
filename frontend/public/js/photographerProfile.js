async function fetchPhotographerData() {
    try {
        const response = await fetch('../photographersProfilesData.json');
        const data = await response.json();
        const selectedId = localStorage.getItem('SelectedPerson');
        const selectedPhotographer = data.find(p => p.id === selectedId);

        if (selectedPhotographer) {
            displayPhotographer(selectedPhotographer);
        } else {
            console.error('Selected photographer not found in data.');
        }
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
    }
}

function displayPhotographer(photographer) {
    document.title = photographer.name;

    const profileContainer = document.getElementById('photographerProfile');
    const albumsHtml = photographer.albums.map(album => {
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
        <div class="photographer-info">
            <img src="${photographer.image}" alt="${photographer.name}" class="photographer-image">
            <div class="button-container">
                <button class="ViewPackage">View Pricing</button>
            </div>
            <div class="social-media">
                <h2>${photographer.name}</h2>
                <div class="social-media-content">
                    <a href="${photographer.instagram}" target="_blank">
                        <img src="../img/SocialMediaIcons/instagram.png" alt="Instagram">
                        <span>${photographer.instagram}</span>
                    </a>
                </div>
                <div class="social-media-content">
                    <a href="${photographer.facebook}" target="_blank">
                        <img src="../img/SocialMediaIcons/facebook.png" alt="Facebook">
                        <span>${photographer.facebook}</span>
                    </a>
                </div>
                <div class="social-media-content">
                    <a href="mailto:${photographer.email}">
                        <img src="../img/SocialMediaIcons/gmail.png" alt="Gmail">
                        <span>${photographer.email}</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="photosessions">
            <h3>My Photosessions</h3>
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

        <div id="pricingPopup" class="pricing-popup" style="display: none;">
            <div class="popup-content">
                <span class="back-arrow" id="closePricingPopup">&larr;</span>
                <h2>Hourly Rate</h2>
                <div class="HourlyRate-options">
                    <div class="HrRate" data-price="2500">
                        <span>2500£ per hr</span>
                    </div>
                    <div class="HrRate" data-price="4500">
                        <span>4500£ per 2hrs</span>
                    </div>
                    <div class="HrRate" data-price="7000">
                        <span>7000£ per 3hrs</span>
                    </div>
                    <div class="HrRate" data-price="1000">
                        <span>10000£ per 10hrs</span>
                    </div>
                </div>
                <hr />
                <h2>Photos Rate</h2>
                <div class="package-options">
                    <div class="package" data-price="100">
                        <span>3000£ for 10 photos</span>
                    </div>
                    <div class="package" data-price="1000">
                        <span>7000£ for 20 photos</span>
                    </div>
                    <div class="package" data-price="3000">
                        <span>10000£ for 40 photos</span>
                    </div>
                    <div class="package" data-price="2000">
                        <span>20000£ for 80 photos</span>
                    </div>
                </div>
                <div class="button-container">
                    <button id="checkAvailability">Check Availability</button>
                    <button id="closePopup">Close</button>
                </div>
            </div>
        </div>

        <div id="availabilityPopup" class="availability-popup" style="display: none;">
            <div class="popup-content">
                <span class="back-arrow" id="backToPricingPopup">&larr;</span>
                <h2>Select Date and Time</h2>
                <input type="date" id="datePicker">
                <input type="time" id="timePicker">
                <h3>Drop your location</h3>
                <input type="text" id="locationInput" placeholder="Enter your location" class="location-input">
                <div class="button-container">
                    <button id="bookNowAvailability">Book Now</button>
                    <button id="closeAvailabilityPopup">Close</button>
                </div>
            </div>
        </div>

    `;

    setupPricingPopup();
    setupAvailabilityPopup();
    setupPagination();
}

function setupPricingPopup() {
    const viewPricingButton = document.querySelector('.ViewPackage');
    viewPricingButton.addEventListener('click', () => {
        document.getElementById('pricingPopup').style.display = 'flex';
    });

    document.getElementById('closePopup').addEventListener('click', () => {
        document.getElementById('pricingPopup').style.display = 'none';
    });

    document.getElementById('closeAvailabilityPopup').addEventListener('click', () => {
        document.getElementById('availabilityPopup').style.display = 'none';
    });

    document.querySelectorAll('.package').forEach(package => {
        package.addEventListener('click', function() {
            document.querySelectorAll('.package').forEach(p => p.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    document.querySelectorAll('.HrRate').forEach(package => {
        package.addEventListener('click', function() {
            document.querySelectorAll('.HrRate').forEach(p => p.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    document.getElementById('checkAvailability').addEventListener('click', () => {
        document.getElementById('pricingPopup').style.display = 'none';
        document.getElementById('availabilityPopup').style.display = 'flex';
    });

    document.getElementById('bookNow').addEventListener('click', () => {
        alert('Booking functionality not implemented yet!');
    });
}

function setupAvailabilityPopup() {
    document.getElementById('closeAvailabilityPopup').addEventListener('click', () => {
        document.getElementById('availabilityPopup').style.display = 'none';
    });

    document.getElementById('bookNowAvailability').addEventListener('click', () => {
        const selectedDate = document.getElementById('datePicker').value;
        const selectedTime = document.getElementById('timePicker').value;
        alert(`Booking confirmed for ${selectedDate} at ${selectedTime}!`);
        document.getElementById('availabilityPopup').style.display = 'none';
    });
}




function setupPagination() {
    const items = document.querySelectorAll('.album-container');
    const itemsPerPage = 12; // Maximum 12 albums per page (4 rows * 3 albums per row)
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

fetchPhotographerData();
