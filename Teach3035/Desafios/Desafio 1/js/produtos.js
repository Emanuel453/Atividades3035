

// Lista fixa de produtos da loja
const products = [
  { name: "Ração Golden Especial Cães Adultos", price: 149.90 },
  { name: "Ração Frango Sabor Especial", price: 138.90 },
  { name: "Ração Golden Gatos Castrados", price: 29.90 },
  { name: "Brinquedo Mordedor", price: 19.90 },
  { name: "Coleira Ajustável", price: 34.90 },
  { name: "Shampoo Neutro para Pets", price: 24.90 }
];

// Adiciona o produto escolhido ao carrinho salvo no localStorage
function addToCart(i) {
  let cart = localStorage.getItem("cart");

  if (cart === null) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  cart.push(products[i]);

  localStorage.setItem("cart", JSON.stringify(cart));

  let messageElement = document.getElementById("message");
  messageElement.innerHTML = products[i].name + " foi adicionado ao carrinho!";
}