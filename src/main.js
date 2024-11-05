//display
document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=';
  const productGrid = document.getElementById('product-grid');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeModal = document.getElementById('close-modal');

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
        <h2 class="product-name">${product.name}</h2><br>
        <p class="productbrand">Brand: ${product.brand}</p>
        <p class="product_type">Type: ${product.product_type}</p>
        <p class="productrating">${product.rating ? `Rating: ${product.rating}` : 'Rating: Unavailable'}</p><br>
        <p class="product-price">${product.price ? `RM${product.price}` : 'Price: Unavailable'}</p>
        <a href="#" class="product-link" onclick="showDescription('${product.description}')">View Description</a>
        <a href="${product.product_link}" target="_blank" class="product-link">View Product</a>
        <a href="${product.website_link}" target="_blank" class="website-link">View Website</a>
      `;

      productGrid.appendChild(productCard);
    });
  }

  // Show modal with description
  window.showDescription = function(description) {
    modalContent.textContent = description || 'Description not available';
    modal.style.display = 'block';
  };

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal if user clicks outside of it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});


//search bar
function buttonClicked() {
  const brand = document.getElementById('brand_input').value;

  fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
  .then(response => response.json())
  .then(data => {
      const productContainer = document.getElementById('productContainer');
      productContainer.innerHTML = ""; // Clear previous results
      
      if (data.length === 0) {
          productContainer.innerHTML = "No products found for this brand.";
          return;
      }
      
      // Clear previous grid content when new search is performed
      const productGrid = document.getElementById('product-grid');
      productGrid.innerHTML = ""; 
      
      // Display each product
      data.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          
          productCard.innerHTML = `
              <img src="${product.image_link}" alt="${product.name}" class="product-image">
              <h2 class="product-name">${product.name}</h2><br>
              <p class="productbrand">Brand: ${product.brand}</p>
              <p class="product_type">Type: ${product.product_type}</p>
              <p class="productrating">${product.rating ? `Rating: ${product.rating}` : 'Rating: Unavailable'}</p><br>
              <p class="product-price">${product.price ? `RM${product.price}` : 'Price: Unavailable'}</p>
              <a href="${product.product_link}" target="_blank" class="product-link">View Product</a>
              <a href="#" class="product-link" onclick="showDescription('${product.description}')">View Description</a>
              <a href="${product.website_link}" target="_blank" class="website-link">View Website</a>
          `;
          
          productGrid.appendChild(productCard);
      });
  })
  .catch(error => console.error('Error fetching data:', error));
}

//price range
function filterPrices() {
  const minPrice = parseFloat(document.getElementById("min_price").value);
  const maxPrice = parseFloat(document.getElementById("max_price").value);
  
  if (isNaN(minPrice) || isNaN(maxPrice)) {
    alert("Please enter valid minimum and maximum prices.");
    return;
  }

  if (minPrice > maxPrice) {
    alert("Minimum price cannot be greater than maximum price.");
    return;
  }

  const products = document.querySelectorAll(".product-card"); // Select product cards
  
  products.forEach(product => {
    const productPrice = parseFloat(product.getAttribute("data-price")); // Get data-price
    
    if (productPrice >= minPrice && productPrice <= maxPrice) {
      product.style.display = "block"; // Show product within the range
    } else {
      product.style.display = "none"; // Hide product outside the range
    }
  });
}





