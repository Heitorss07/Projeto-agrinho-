document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;

        if (productName && productPrice) {
            addProduct(productName, productPrice);
            productForm.reset();
        }
    });

    function addProduct(name, price) {
        const li = document.createElement('li');
        li.textContent = `${name} - R$${price}`;
        productList.appendChild(li);
    }
});
