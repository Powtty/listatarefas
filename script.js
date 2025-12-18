//Utilize este array para trabalhar com a lista de tarefas
let tarefas = [];

function adicionarLista(){
    //Selecionando os elementos da página html input
    const campoTarefa = document.getElementById("inputTarefa");
    let textoTarefa = campoTarefa.value.trim();

    //Limpando e colocando em maiúsculas
    textoTarefa = textoTarefa.toUpperCase();

    //Não permitir tarefa vazia
    if (textoTarefa === "") {
        alert("Digite uma tarefa!");
        return;
    }

  //Não permitir tarefa repetida
if (tarefas.includes(textoTarefa)) {
    const mensagens = [
        "Ué? Já anotei isso aí.",
        "essa tarefa já está na lista.",
        "repito, já está na lista", 
        "...",
        "escreva outra tarefa, essa já foi adicionada"
    ];
    alert(mensagens[Math.floor(Math.random() * mensagens.length)]);
    campoTarefa.value = "";
    return;
}
    //Adicionando no array tarefas
    tarefas.push(textoTarefa);
    
    //Chamando a função incluir tarefa
    incluirTarefaLista(textoTarefa);
       
    //Limpando o campo de entrada da Tarefa após a inclusão na lista
    campoTarefa.value = '';
}

function incluirTarefaLista(textoTarefa){
    //Selecionando os elementos da página html input e lista
    const listaTarefas = document.getElementById("listaTarefas");
    
    //Criando um novo elemento item-lista
    const novaTarefa = document.createElement("li");
    
    //Incluindo o novo elemento na lista
    listaTarefas.appendChild(novaTarefa);
    
    //Colocando a classe no novo item da lista
    novaTarefa.classList.add("item-tarefa");  

    //Incluindo o texto e botão de excluir no novo item da lista
    novaTarefa.innerHTML = `
        <span>${textoTarefa}</span>
        <div class="divLixeira">
            <img class="btnLixeira" onclick="excluirTarefa(this)" src="lixeira.png">
        </div>`;
}

function LimparLista(){
    tarefas = [];
    const limparTarefa = document.getElementById("listaTarefas");
    limparTarefa.innerHTML = '';
}

function ordenarLista(){
    tarefas.sort(); 

    const lista = document.getElementById("listaTarefas");
    lista.innerHTML = "";
    
    tarefas.forEach(t => incluirTarefaLista(t));
}

function excluirTarefa(botao){
    const li = botao.closest("li");
    const textoTarefa = li.querySelector("span").textContent.trim();

    //Remove do array
    tarefas = tarefas.filter(t => t !== textoTarefa);

    //Remove da tela
    li.remove();
}