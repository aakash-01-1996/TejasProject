// JavaScript to control filter functionality
document.querySelector('.price-slider').addEventListener('input', (event) => {
    const price = event.target.value;
    console.log(`Selected price range: Rs. 0 - Rs. ${price}`);
    // Here you can implement filter logic based on the selected price
  });
  
  // Additional filter interactions can be added here
  