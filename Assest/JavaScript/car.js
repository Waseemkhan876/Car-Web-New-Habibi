  // Toggle mobile nav
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('active');
  });

  // Set update date
  document.getElementById('update-date').innerText = new Date().toDateString();

  // Sample data
  const carData = [
    {
      stock: "2220091",
      make: "THAR",
      model: "CLS500C",
      year: 2022,
      color: "Red",
      aed: 18000,
      usd: 49005,
      location: "Aurangabad , Maharashtra",
      information: "Established in 2007 as a General Trading company Habibi Used Cars & Auto Spare Parts Trading WRP registered a phenomenal growth in the following years. Having own offices and loading facilities in almost all the states of United States of America, Habibi Used Cars & Auto Spare parts Trading LLC imports more than 75 containers that is 300 accident Cars a month and figures are still growing . ",
      image: "Assest/Images/Thar.webp"
    },
    {
      stock: "2220092",
      make: "LAMBOROGHINI",
      model: "CLS577C",
      year: 2023,
      color: "Green",
      aed: 18000,
      usd: 67705,
      location: "Aurangabad , Maharashtra",
      information: "Established in 2007 as a General Trading company Habibi Used Cars & Auto Spare Parts Trading WRP registered a phenomenal growth in the following years. Having own offices and loading facilities in almost all the states of United States of America, Habibi Used Cars & Auto Spare parts Trading LLC imports more than 75 containers that is 300 accident Cars a month and figures are still growing . ",
      image: "Assest/Images/Lamboroghini.webp"
    },
    {
      stock: "2220093",
      make: "MAHINDRA",
      model: "S59870C",
      year: 2023,
      color: "Dark Red",
      aed: 18000,
      usd: 49905,
      location: "Pune Maharashtra",
      information: "Established in 2007 as a General Trading company Habibi Used Cars & Auto Spare Parts Trading WRP registered a phenomenal growth in the following years. Having own offices and loading facilities in almost all the states of United States of America, Habibi Used Cars & Auto Spare parts Trading LLC imports more than 75 containers that is 300 accident Cars a month and figures are still growing . ",
      image: "Assest/Images/mahindra.webp"
    },
    {
      stock: "2220094",
      make: "SKODA KODIAQ",
      model: "RS500C",
      year: 2021,
      color: "Dark Grey",
      aed: 18000,
      usd: 4905,
      location: "Hydrabad India",
      information: "Established in 2007 as a General Trading company Habibi Used Cars & Auto Spare Parts Trading WRP registered a phenomenal growth in the following years. Having own offices and loading facilities in almost all the states of United States of America, Habibi Used Cars & Auto Spare parts Trading LLC imports more than 75 containers that is 300 accident Cars a month and figures are still growing . ",
      image: "Assest/Images/Skoda Kodiaq.webp"
    },
    {
      stock: "2220095",
      make: "HYUNDAI",
      model: "UYT076C",
      year: 2018,
      color: "Black",
      aed: 18000,
      usd: 4905,
      location: "Aurangabad , Maharashtra",
      information: "Established in 2007 as a General Trading company Habibi Used Cars & Auto Spare Parts Trading WRP registered a phenomenal growth in the following years. Having own offices and loading facilities in almost all the states of United States of America, Habibi Used Cars & Auto Spare parts Trading LLC imports more than 75 containers that is 300 accident Cars a month and figures are still growing . ",
      image: "Assest/Images/Hyundai.webp"
    },
    {
      stock: "2220096",
      make: "SKODA",
      model: "GT097S0C",
      year: 2015,
      color: "Green",
      aed: 18000,
      usd: 4905,
      location: "Pune , Maharashtra",
      information: "Established in 2007 as a General Trading company Habibi Used Cars & Auto Spare Parts Trading WRP registered a phenomenal growth in the following years. Having own offices and loading facilities in almost all the states of United States of America, Habibi Used Cars & Auto Spare parts Trading LLC imports more than 75 containers that is 300 accident Cars a month and figures are still growing . ",
      image: "Assest/Images/skoda.webp"
    },
  ];

  function populateFilters() {
    const makes = [...new Set(carData.map(c => c.make))];
    const models = [...new Set(carData.map(c => c.model))];
    const years = [...new Set(carData.map(c => c.year))];
    const colors = [...new Set(carData.map(c => c.color))];
    const stocks = [...new Set(carData.map(c => c.stock))];

    const addOptions = (id, values) => {
      const select = document.getElementById(id);
      select.innerHTML = `<option value="">All ${id.charAt(0).toUpperCase() + id.slice(1)}</option>`;
      values.forEach(v => {
        select.innerHTML += `<option value="${v}">${v}</option>`;
      });
    };

    addOptions("make", makes);
    addOptions("model", models);
    addOptions("year", years);
    addOptions("color", colors);
    addOptions("stock", stocks);
  }

  function renderCars(filter = {}) {
    const list = document.getElementById('car-list');
    list.innerHTML = '';
    const filtered = carData.filter(car => {
      return (!filter.make || car.make === filter.make) &&
             (!filter.model || car.model === filter.model) &&
             (!filter.year || car.year == filter.year) &&
             (!filter.color || car.color === filter.color) &&
             (!filter.stock || car.stock === filter.stock);
    });

    document.getElementById('total-results').innerText = `${filtered.length} car(s) found.`;

    filtered.forEach(car => {
      list.innerHTML += `
        <div class="car-card">
          <div>
            <p class="stock">Stock # ${car.stock}</p>
            <img src="${car.image}" alt="${car.make} ${car.model}" loading="lazy"/>
            <h5 class="year-m-m">${car.year} ${car.model}</h5>
              <span id = "offer">
                
                <span id ="aed-usd">
             <p class="aed"><span class="aed-t">AED</span> ${car.aed.toLocaleString()} </p>
            <p class="usd"><span class="usd-t">USD</span> ${car.usd.toLocaleString()} </p>
                  </span>

                <span id ="offer-t">
                 <p>${car.make}</p>
                  </span>
              </span>
            <p class="location">📍 Location: ${car.location}</p>
          </div>
          
      <button class="btn-view" data-stock="${car.stock}">View Details</button>
        </div>`;
    });
  }

  document.getElementById('search-button').addEventListener('click', () => {
    const filter = {
      make: document.getElementById('make').value,
      model: document.getElementById('model').value,
      year: document.getElementById('year').value,
      color: document.getElementById('color').value,
      stock: document.getElementById('stock').value,
    };
    renderCars(filter);
  });
  
  // Handle View Details Popup
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-view")) {
    const stock = e.target.getAttribute("data-stock");
    const car = carData.find(c => c.stock === stock);
    if (car) {
      document.getElementById("modal-details").innerHTML = `
       <div class="popup">
        <h2 style="text-align: center;">${car.make} - ${car.model}</h2>
        <img src="${car.image}" alt="${car.make}" style="width:100%; max-height:300px; object-fit:cover;" />
       <div class="pop-car-details">
        <div class="car-det">
        <h2 style="text-align: left;">Details</h2>
        <p><strong>Stock:</strong> ${car.stock}</p>
        <p><strong>Year:</strong> ${car.year}</p>
        <p><strong>Color:</strong> ${car.color}</p>
        <p><strong>AED:</strong> ${car.aed.toLocaleString()}</p>
        <p><strong>USD:</strong> ${car.usd.toLocaleString()}</p>
        <p><strong>Location:</strong> ${car.location}</p>
        </div>
        <div class="car-about">
        <h2 style="text-align: center;">About Car</h2>
        <p><strong> About :- </strong> ${car.information}</p>
        </div>
       </div>
       </div>
      `;
      document.getElementById("carModal").style.display = "block";
    }
  }
});

// Close the modal
document.getElementById("closeModal").onclick = () => {
  document.getElementById("carModal").style.display = "none";
};

// Close when clicking outside
window.onclick = function (event) {
  if (event.target == document.getElementById("carModal")) {
    document.getElementById("carModal").style.display = "none";
  }
};

  populateFilters();
  renderCars();