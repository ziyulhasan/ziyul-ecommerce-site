
const dateElement = document.getElementById('currentDate');
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = `আজকের তারিখ: ${today.toLocaleDateString('bn-BD', options)}`;

const products = [
  {
    name: "Product 1",
    price: "৳500",
    description: "High quality item.",
    image: "https://via.placeholder.com/250"
  },
  {
    name: "Product 2",
    price: "৳750",
    description: "Best seller.",
    image: "https://via.placeholder.com/250"
  },
  {
    name: "Product 3",
    price: "৳1,000",
    description: "Premium product.",
    image: "https://via.placeholder.com/250"
  }
];

const container = document.getElementById('productContainer');

products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} - ${product.description}</p>
  `;
  container.appendChild(div);
});
