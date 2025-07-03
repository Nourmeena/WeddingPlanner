async function fetchAtelierDetails() {
  try {
    const response = await fetch('pageatlah.json');
    const data = await response.json();
    
    const selectedAtelierId = localStorage.getItem('SelectedAtelierId');
  
  
    const selectedDresses = data.filter(item => item.ID.toString() === selectedAtelierId && item.type === 'data');
    
  
    displayAtelierDetails(selectedDresses);

  } catch (error) {
    console.error('Error fetching atelier details:', error);
  }
}

function displayAtelierDetails(dresses) {
  const detailsContainer = document.getElementById('row');
  
  if (dresses.length > 0) {
    let atlahHTML = '';
    dresses.forEach(atelier => {
      atlahHTML += `
      <div class="col">
        <div class="card">
          <img src="${atelier.img}" class="card-img-top" alt="Atelier Image">
          <div class="card-body">
            <h3 class="card-title">${atelier.name}</h3>
            <p class="card-text">Color: ${atelier.color}</p>
            <p class="card-text">Size: ${atelier.size}</p>
            <p class="card-text">Price: ${atelier.price1}</p>
          </div>
        </div>
        </div>`;
    });
    detailsContainer.innerHTML = atlahHTML;
  } else {
    detailsContainer.innerHTML = `<p>No dresses found.</p>`;
  }
}

// Fetch atelier details on page load
fetchAtelierDetails();
