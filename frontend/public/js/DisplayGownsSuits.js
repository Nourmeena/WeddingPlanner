
document.addEventListener("DOMContentLoaded", () => {
  // Initial fetch call
  fetchData();
});

async function fetchData() {
  try {
    const response = await fetch('pageatlah.json');
    const data = await response.json();

    // Retrieve the selected ID from local storage
    const selectedId = localStorage.getItem('SelectedPerson');
    console.log("Selected ID: " + selectedId);

    // Filter the data to get all dresses for the selected ID
    const selectedDresses = data.filter(item => item.ID.toString() === selectedId && item.type === 'data');

    // Display filtered dresses
    displayData(selectedDresses);
    
    if (selectedDresses.length > 0) {
      console.log("Selected dresses found:", selectedDresses);
    } else {
      console.error('No dresses found for the selected store ID.');
    }

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayData(data) {
  const atelierDetailsElement = document.getElementById("row"); // Update to use the correct ID
  if (!atelierDetailsElement) {
    console.error("Element with ID 'atelierDetails' not found in the DOM.");
    return; // Early return if the element is not found
  }

  let atlah = '';

  for (let i = 0; i < data.length; i++) {
    const id = data[i].ID; // Use the correct property for ID
    atlah += `
    <div id="cards>
      <div class="col">
        <div class="card" data-id="${id}">
          <img src="${data[i].img}" class="card-img-top" alt="Dress Image" />
          <div class="card-body">
            <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <h3 class="card-title">${data[i].name}</h3>
            <p class="card-text">Color: ${data[i].color}</p>
            <p class="card-text">Size: ${data[i].size}</p>
            <p class="card-text">Price: ${data[i].price1}</p>
          </div>
        </div>
      </div>
      </div>`;
  }

  atelierDetailsElement.innerHTML = atlah; // Update the innerHTML of the atelierDetails element
  console.log('Data displayed:', data);
}

function navigateToDetails(id) {
  localStorage.setItem('SelectedAtelierId', id);

  // Redirect to the details page
  window.location.href = '/Atlahd';
}

function setupSearch(data) {
  document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase(); 
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm)); 
    displayData(filteredData);
  });
}

function addClickEvent() {
  const containers = document.querySelectorAll('.card');
  containers.forEach(container => {
    container.addEventListener('click', () => {
      const id = container.getAttribute('data-id');
      localStorage.setItem('SelectedPerson', id);

      // Re-fetch data to update the display for the selected store
      fetchData();
    });
  });
}

// Initial fetch call
fetchData().then(() => {
  addClickEvent();
});
