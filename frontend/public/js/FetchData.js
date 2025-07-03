class ServiceData extends HTMLElement {
    async connectedCallback() {
        const serviceType = this.getAttribute('service-type');
        if (!serviceType) {
            console.error('No service type provided.');
            return;
        }

        try {
            const data = await fetch(`../${serviceType}.json`).then(response => response.json());
            this.displayItems(data, serviceType);
        } catch (error) {
            console.error('Error fetching the JSON file:', error);
        }

        this.addSortingButton();
    }

    displayItems(data, title) {
        this.data = data;

        let outPut = '';
        for (let i = 0; i < data.length; i++) {
            const rating = data[i].Rating;
            const id = data[i].id;
            outPut += 
                `<div class="icon-container" data-rating="${rating}" data-id="${id}" data-name="${data[i].name.toLowerCase()}">
                    <a href="${data[i].page}">
                        <div class="circle">
                            <img src="${data[i].Photo}" alt="${data[i].name}">
                        </div>
                    </a>
                    <figcaption>${data[i].name}</figcaption>
                    <div class="rating">
                        ${this.generateStars(rating)}
                    </div>
                </div>`;
        }
        this.innerHTML = `
        <div class="header-row">
            <h2>${title}</h2>
            <div class="sort-search-container">
                <div class="sort-icons">
                    <span id="sortByRatingAsc" title="Sort Ascending">&#x25B2;</span>
                    <span>Rating</span>
                    <span id="sortByRatingDesc" title="Sort Descending">&#x25BC;</span>
                </div>
                <input  type="text" id="searchBar" placeholder="Search...">
            </div>
        </div>
        <div class="icon-circles">${outPut}</div>
        <div id="searchResult"></div>`;

        this.addClickEvent();
        this.addSearchFunctionality();
    }

    addClickEvent() {
        const containers = this.querySelectorAll('.icon-container');
        containers.forEach(container => {
            container.addEventListener('click', (event) => {
                const id = container.getAttribute('data-id');
                localStorage.setItem('SelectedPerson', id);
            });
        });
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        let stars = '';

        for (let j = 0; j < fullStars; j++) {
            stars += `<span class="fa fa-star checked star"></span>`;
        }

        if (halfStar) {
            stars += `<span class="fa fa-star-half-o checked star"></span>`;
        }

        for (let j = fullStars + (halfStar ? 1 : 0); j < 5; j++) {
            stars += `<span class="fa fa-star-o star"></span>`;
        }

        return stars;
    }

    addSortingButton() {
        const sortAscButton = document.getElementById('sortByRatingAsc');
        const sortDescButton = document.getElementById('sortByRatingDesc');

        sortAscButton.addEventListener('click', () => {
            this.sortItems(true);
        });

        sortDescButton.addEventListener('click', () => {
            this.sortItems(false);
        });
    }

    sortItems(isAscending) {
        const container = this.querySelector('.icon-circles');
        const items = Array.from(container.querySelectorAll('.icon-container'));

        const sortedItems = items.sort((a, b) => {
            const ratingA = parseFloat(a.getAttribute('data-rating'));
            const ratingB = parseFloat(b.getAttribute('data-rating'));

            return isAscending ? ratingA - ratingB : ratingB - ratingA;
        });

        container.innerHTML = '';
        sortedItems.forEach(item => container.appendChild(item));
    }

    addSearchFunctionality() {
        const searchBar = this.querySelector('#searchBar');
        const searchResultDiv = this.querySelector('#searchResult');
    
        searchBar.addEventListener('input', (event) => {
            const searchText = event.target.value.toLowerCase();
            const items = this.querySelectorAll('.icon-container');
            let found = false;

            items.forEach(item => {
                const name = item.getAttribute('data-name');
                if (name.includes(searchText)) {
                    item.style.display = 'flex';
                    found = true;
                } else {
                    item.style.display = 'none';
                }
            });
    
            if (!found) {
                searchResultDiv.innerHTML = '<span class="no-results">Data does Not exist</span>';
            } else {
                searchResultDiv.innerHTML = '';
            }
        });
    }
}

customElements.define('service-data', ServiceData);
