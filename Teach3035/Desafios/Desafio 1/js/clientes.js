

// Lê os clientes salvos no localStorage e desenha um card pra cada um
function loadClients() {
  let clients = localStorage.getItem("clients");

  if (clients === null) {
    clients = [];
  } else {
    clients = JSON.parse(clients);
  }

  let container = document.getElementById("clientList");

  for (let i = 0; i < clients.length; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("onclick", "openModal(" + i + ")");

    let petNameElement = document.createElement("h3");
    let nameText = document.createTextNode(clients[i].petName);
    petNameElement.appendChild(nameText);

    let dateElement = document.createElement("p");
    let dateText = document.createTextNode("Atendimento: " + clients[i].appointmentDate);
    dateElement.appendChild(dateText);

    card.appendChild(petNameElement);
    card.appendChild(dateElement);

    container.appendChild(card);
  }
}

// Abre o modal e preenche com os detalhes completos do cliente clicado
function openModal(i) {
  let clients = JSON.parse(localStorage.getItem("clients"));
  let client = clients[i];

  document.getElementById("modalTutorName").innerHTML = "Tutor: " + client.tutorName;
  document.getElementById("modalTutorPhone").innerHTML = "Telefone: " + client.tutorPhone;
  document.getElementById("modalTutorAddress").innerHTML = "Endereço: " + client.tutorAddress;
  document.getElementById("modalPetAge").innerHTML = "Idade: " + client.petAge;
  document.getElementById("modalPetSize").innerHTML = "Porte: " + client.petSize;

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Executa assim que o script carrega, pra já mostrar os clientes salvos
loadClients();
