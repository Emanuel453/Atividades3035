

// Salva um novo cliente no localStorage após validar os campos obrigatórios
function saveClient() {
  let tutorName = document.getElementById("tutorName").value;
  let tutorPhone = document.getElementById("tutorPhone").value;
  let tutorAddress = document.getElementById("tutorAddress").value;
  let appointmentDate = document.getElementById("appointmentDate").value;
  let petName = document.getElementById("petName").value;
  let petAge = document.getElementById("petAge").value;
  let petSize = document.getElementById("petSize").value;

  // Validação campo a campo, com mensagem específica pra cada um
  if (tutorName === "") {
    alert("Por favor, preencha o nome do tutor.");
    return;
  }

  if (tutorPhone === "") {
    alert("Por favor, preencha o telefone do tutor.");
    return;
  }

  if (tutorAddress === "") {
    alert("Por favor, preencha o endereço do tutor.");
    return;
  }

  if (appointmentDate === "") {
    alert("Por favor, selecione a data do atendimento.");
    return;
  }

  if (petName === "") {
    alert("Por favor, preencha o nome do animal.");
    return;
  }

  if (petAge === "") {
    alert("Por favor, preencha a idade do animal.");
    return;
  }

  let client = {
    tutorName: tutorName,
    tutorPhone: tutorPhone,
    tutorAddress: tutorAddress,
    appointmentDate: appointmentDate,
    petName: petName,
    petAge: petAge,
    petSize: petSize
  };

  // Recupera a lista já salva, ou cria uma nova se ainda não existir
  let clients = localStorage.getItem("clients");

  if (clients === null) {
    clients = [];
  } else {
    clients = JSON.parse(clients);
  }

  clients.push(client);

  // Precisa converter pra texto (JSON) antes de salvar, já que o localStorage só guarda string
  localStorage.setItem("clients", JSON.stringify(clients));

  // Esconde o formulário e mostra a mensagem de sucesso
  document.getElementById("registrationForm").style.display = "none";
  document.getElementById("successMessage").style.display = "block";

  let confirmedNameElement = document.getElementById("confirmedName");
  confirmedNameElement.appendChild(document.createTextNode(petName));
}

// Limpa o formulário e volta pro estado inicial, permitindo um novo cadastro
function newRegistration() {
  document.getElementById("registrationForm").reset();
  document.getElementById("registrationForm").style.display = "flex";
  document.getElementById("successMessage").style.display = "none";

  // Remove o nome que tinha sido escrito na mensagem de sucesso anterior
  let confirmedNameElement = document.getElementById("confirmedName");
  while (confirmedNameElement.firstChild) {
    confirmedNameElement.removeChild(confirmedNameElement.firstChild);
  }
}

