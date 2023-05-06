let cart = [];

function addProduct() {
  let img = document.getElementById("img").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  let product = {
    img: img,
    name: name,
    price: price,
  };

  cart.push(product);
  showCart();
}

function showCart() {
  let cartTable = document.getElementById("cart-table");
  cartTable.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    let row = `
      <tr>
        <td>${i+1}</td>
        <td><img src="${cart[i].img}" alt="${cart[i].name}" width="50%"></td>
        <td>${cart[i].name}</td>
        <td>${cart[i].price}</td>
        <td>
          <button onclick="editProduct(${i})">Sửa</button>
          <button onclick="deleteProduct(${i})">Xóa</button>
        </td>
      </tr>
    `;
    cartTable.innerHTML += row;
  }
}

function editProduct(index) {
  let product = cart[index];
  document.getElementById("img").value = product.img;
  document.getElementById("name").value = product.name;
  document.getElementById("price").value = product.price;

  let addButton = document.getElementById("add-button");
  addButton.style.display = "none";

  let updateButton = document.getElementById("update-button");
  updateButton.style.display = "inline-block";
  updateButton.onclick = function () {
    updateProduct(index);
  };
}

function updateProduct(index) {
  let img = document.getElementById("img").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  let product = {
    img: img,
    name: name,
    price: price,
  };

  cart[index] = product;
  showCart();

  let addButton = document.getElementById("add-button");
  addButton.style.display = "inline-block";

  let updateButton = document.getElementById("update-button");
  updateButton.style.display = "none";
  updateButton.onclick = null;

  document.getElementById("form").reset();
}

function deleteProduct(index) {
  cart.splice(index, 1);
  showCart();
}

window.onload = function () {
  showCart();

  let addButton = document.getElementById("add-button");
  addButton.onclick = addProduct;

  let cancelButton = document.getElementById("cancel-button");
  cancelButton.onclick = function () {
    document.getElementById("form").reset();
    addButton.style.display = "inline-block";

    let updateButton = document.getElementById("update-button");
    updateButton.style.display = "none";
    updateButton.onclick = null;
  };
};
