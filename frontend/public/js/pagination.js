document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.album-container');
    const imagesPerPage = 12;
    let currentPage = 1;
    const totalPages = Math.ceil(images.length / imagesPerPage);

    function showPage(page) {
        images.forEach((image, index) => {
            image.style.display = 'none';
            if (index >= (page - 1) * imagesPerPage && index < page * imagesPerPage) {
                image.style.display = 'block';
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
});
