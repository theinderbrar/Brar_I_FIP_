console.clear();

// Products page
// Products Array
const products = [
  {
    productName: "XTREME ARCTIC REFRESH",
    productImage: "prop0010.jpg",
    productDescription: `Dos Guard proudly presents the best beer flavor, Xtreme Arctic Refresh.It is one of the best beer, if you haven't tried it yet. Try! you will love it. `,
  },
  {
    productName: "XTREME FRESHNESS BLAST",
    productImage: "prop1_0010.jpg",
    productDescription: `Dos Guard proudly presents the best beer flavor, Xtreme Freshness blast. It is one of the best beer, if you haven't tried it yet. Try! you will love it. `,
  },
  {
    productName: `XTREME OCEANIC'O RUST`,
    productImage: "prop12_0010.jpg",
    productDescription: `Dos Guard proudly presents the best beer flavor, Xtreme Oceanic'o Rust. It is one of the best beer, if you haven't tried it yet. Try! you will love it. `,
  },
  {
    productName: `XTREME CLASSICAL EDGE`,
    productImage: "prop13_0010.jpg",
    productDescription: `Dos Guard proudly presents the best beer flavor, Xtreme Classical Edge. It is one of the best beer, if you haven't tried it yet. Try! you will love it. `,
  },
];
// Product Container
const productSection = document.querySelector("section.products");
// Popup
const popupContainer = document.querySelector(
  ".product-details-popup-container"
);
const popup = document.querySelector(".product-details-popup");
const popupImage = document.querySelector(
  ".product-details-popup .product-image img"
);
const popupName = document.querySelector(
  ".product-details-popup .product-name"
);
const popupDescription = document.querySelector(
  ".product-details-popup .product-description"
);
const popupBuy = document.querySelector(".product-details-popup .product-buy");
const popupClose = document.querySelector(".close");

console.log(productSection);
function changePopup(id) {
  const product = products[id];
  // Change Product Image
  popupImage.setAttribute("src", `img-in-wiref/${product.productImage}`);
  popupName.innerHTML = product.productName;
  popupDescription.innerHTML = product.productDescription;
}

function hidePopup() {
  popup.style.display = "none";
}
function showPopup() {
  popup.style.display = "flex";
}
productSection.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("product") ||
    e.target.classList.contains("product-name") ||
    e.target.classList.contains("product-image") ||
    e.target.classList.contains("product-image-image")
  ) {
    const product = e.target.closest(".product");
    changePopup(product.dataset.id);
    showPopup();
  }
});

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-details-popup")) {
    hidePopup();
  }
});
