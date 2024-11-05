
//chatgpt display data
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
    const productGrid = document.getElementById('product-grid');
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  
    function displayProducts(products) {
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
  
        productCard.innerHTML = `
          <img src="${product.image_link}" alt="${product.name}" class="product-image">
          <h2 class="product-name">${product.name}</h2>
          <p class="product-brand">${product.brand}</p>
          <p class="product-price">${product.price ? `RM${product.price}` : 'Price unavailable'}</p>
          <a href="${product.product_link}" target="_blank" class="product-link">View Product</a>
        `;
        
  
        productGrid.appendChild(productCard);
      });
    }
});

https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}

//new display data gpt
document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=';
  const productGrid = document.getElementById('product-grid');
  const brandInput = document.getElementById('brand-input'); // Assuming you have an input field for the brand
  const fetchButton = document.getElementById('fetch-button'); // Button to trigger fetch

  fetchButton.addEventListener('click', () => {
    const brand = brandInput.value; // Get the brand value from the input
    fetchProducts(brand);
  });

  function fetchProducts(brand) {
    fetch(`${apiUrl}${brand}`)
      .then(response => response.json())
      .then(data => displayProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }

  function displayProducts(products) {
    productGrid.innerHTML = ''; // Clear the grid before adding new products
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <img src="${product.image_link}" alt="${product.name}" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-brand">${product.brand}</p>
        <p class="product-price">${product.price ? `RM${product.price}` : 'Price unavailable'}</p>
        <a href="${product.product_link}" target="_blank" class="product-link">View Product</a>
      `;

      productGrid.appendChild(productCard);
    });
  }
});
//display data gpt
document.getElementById('brandForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const brand = document.getElementById('brandInput').value.trim();
  const productList = document.getElementById('productList');
  productList.innerHTML = '';  // Clear previous results

  try {
      const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);
      const data = await response.json();

      if (data.length === 0) {
          productList.innerHTML = '<li>No products found for this brand.</li>';
          return;
      }

      data.forEach(product => {
          const productItem = document.createElement('li');
          productItem.classList.add('product-item');

          productItem.innerHTML = `
              <img src="${product.image_link}" alt="${product.name}">
              <div class="product-info">
                  <h3>${product.name}</h3>
                  <p><strong>Price:</strong> $${product.price || 'N/A'}</p>
                  <p>${product.description || 'No description available.'}</p>
              </div>
          `;

          productList.appendChild(productItem);
      });
  } catch (error) {
      console.error("Error fetching data:", error);
      productList.innerHTML = '<li>There was an error fetching the products. Please try again later.</li>';
  }
});

//madam
function buttonClicked(){
    
    var city = document.getElementById("city_input").value

    fetch(`https://restcountries.com/v3.1/all?fields=name,flags`)
    .then((response) => response.json())
    .then((data) => {
        
        var temp1 = data.main.temp - 273.15
        var temp2 = temp1 * 1.2

        console.log(data)  
        console.log(data.main.temp)
        console.log(data.name)
        console.log(`Temperature in ${data.name} is ${data.main.temp}`)
        console.log(`The temparature in celcius is ${temp1.toFixed(2)}`)
        console.log(`weather is ${data.weather[0].description}`)
        console.log(`Temperature in celcius is ${temp1.toFixed(2)} burt feels like ${temp2.toFixed(2)}`)
        console.log(``)
        document.getElementById("demo1").innerHTML = `Temperature in ${data.name} is ${data.main.temp}`
        document.getElementById("demo2").innerHTML = `Temperature in celcius is ${temp1.toFixed(2)} burt feels like ${temp2.toFixed(2)}`
        document.getElementById("demo3").innerHTML = `weather is ${data.weather[0].description}`
    } )  
}

//search bar
function buttonClicked() {
  const brand = document.getElementById('beauty_input').value;

  fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
      .then(response => response.json())
      .then((data) => {
        const productContainer = document.getElementById('productContainer');
          productContainer.innerHTML = ""; // Clear previous results

          if (data.length === 0) {
              productContainer.innerHTML = "No products found for this brand.";
              return;
            }
      })
}
//search bar zarul
function buttonClicked() {
  const brand = document.getElementById('brand_input').value;

  fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
  .then(response => response.json())
  .then(data) ; {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ""; // Clear previous results
    
    if (data.length === 0) {
      productContainer.innerHTML = "No products found for this brand.";
      return;
    }
  }
}   

//madam display data
function buttonClicked(){  
    
  var brand = document.getElementById("brand").value

  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
  .then((response) => response.json())
  .then((data) => {
      
      console.log(data)  

  } )  
}
//popup box js



