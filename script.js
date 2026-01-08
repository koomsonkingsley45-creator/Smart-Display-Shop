const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product");
const searchInput = document.getElementById("searchInput");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");

        products.forEach(product => {
            if (category === "all" || product.getAttribute("data-category") === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});

searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.toLowerCase();

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
