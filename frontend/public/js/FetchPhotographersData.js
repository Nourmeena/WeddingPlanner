async function fetchData() {
  try {
    const response = await fetch('../Photographers.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching the JSON file:', error);
  }
}

function displayPhotographers(data) {
  let outPut = '';
  for (let i = 0; i < data.length; i++) {
    const rating = data[i].Rating;
    outPut += `
        <div class="icon-container">
            <a href="${data[i].page}">
                <div class="circle">
                    <img src="${data[i].Photo}" alt="${data[i].name}">
                </div>
            </a>
            <figcaption>${data[i].name}</figcaption>
            <div class="rating">
                ${generateStars(rating)}
            </div>
        </div>
    `;
  }
  document.getElementById("photographer-list").innerHTML = outPut;
}

function generateStars(rating) {
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

fetchData().then(data => {
  displayPhotographers(data); // Display data initially

  // Event listener for sorting by rating
  document.getElementById('sortByRating').addEventListener('click', function () {
    const sortedData = [...data].sort((a, b) => b.Rating - a.Rating); // Sort by rating descending
    displayPhotographers(sortedData); // Display sorted photographers immediately
  });
});
