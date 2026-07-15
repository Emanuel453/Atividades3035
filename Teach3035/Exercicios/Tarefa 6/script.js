

let tarefas = [];
let filtroAtivo = "todas";

function adicionarTarefa() {
    let nome = document.getElementById("tarefa").value;
    let data = document.getElementById("criacao").value;

    if (nome === "") {
        alert("Preencha o nome da tarefa");
        return;
    }

    let tarefa = {
        nome: nome,
        dataCriacao: data,
        concluida: false
    };

    tarefas.push(tarefa);

    atualizarTela();

    document.getElementById("tarefa").value = "";
    document.getElementById("criacao").value = "";
}

function concluirTarefa(i) {
    tarefas[i].concluida = true;
    atualizarTela();
}

function listarPendentes() {
    let pendentes = [];

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].concluida === false) {
            pendentes.push(tarefas[i]);
        }
    }

    return pendentes;
}

function alternarFiltro() {
    let botao = document.getElementById("filtro");

    if (filtroAtivo === "todas") {
        filtroAtivo = "pendentes";
        botao.textContent = "Mostrar todas";
    } else {
        filtroAtivo = "todas";
        botao.textContent = "Mostrar apenas pendentes";
    }

    atualizarTela();
}

function atualizarTela() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        if (filtroAtivo === "pendentes" && tarefas[i].concluida === true) {
            continue;
        }

        let card = document.createElement("div");
        card.classList.add("tarefa");

        let titulo = document.createElement("h3");
        titulo.appendChild(document.createTextNode(tarefas[i].nome));

        let dataTexto = document.createElement("p");
        dataTexto.appendChild(document.createTextNode("Criada em: " + tarefas[i].dataCriacao));

        let statusTexto = document.createElement("p");

        if (tarefas[i].concluida === true) {
            statusTexto.appendChild(document.createTextNode("Status: Concluída"));
        } else {
            statusTexto.appendChild(document.createTextNode("Status: Pendente"));
        }

        card.appendChild(titulo);
        card.appendChild(dataTexto);
        card.appendChild(statusTexto);

        if (tarefas[i].concluida === false) {
            let botaoConcluir = document.createElement("button");
            botaoConcluir.appendChild(document.createTextNode("Marcar como concluída"));
            botaoConcluir.setAttribute("onclick", "concluirTarefa(" + i + ")");
            card.appendChild(botaoConcluir);
        }

        lista.appendChild(card);
    }
}