const productName = document.getElementById("productName");
const overallPrice = document.getElementById("totalPrice");
const upButton = document.getElementById("upBtn");
const popUp = document.getElementById("pop-upMenu");

const content= document.getElementById("products");

let count = 0;

const products = [];

let totalPrice = 0;

function displayProduct(value, price) {
    productName.textContent = value;
    products.push(value);
    console.log(products);
    
    totalPrice += price;
    overallPrice.textContent = `Total Price: ₱${totalPrice}.00`;

    
    popUp.innerHTML = "";

    products.forEach(product => {
        const productElement = document.createElement("p");
        productElement.textContent = product;
        popUp.appendChild(productElement);
    });
}

function toggleButton() {
    popUp.classList.toggle("openDropdown");
}
