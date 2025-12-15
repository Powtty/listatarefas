//Utilize este array para trabalhar com a lista de tarefas
let tarefas = [];

function adicionarLista(){
    //Selecionando os elementos da página html input
    const campoTarefa = document.getElementById("inputTarefa");
    let textoTarefa = campoTarefa.value;

    //Limpando e colocando em maíusculas   
    // ***** Inclua o comando para tratar o texto aqui 
    
    //Verifique se a tarefa já foi criada!!!
    //Adicionando no array tarefas
    tarefas.push(textoTarefa);
    
    
    //Chamando a função incluir tarefa
    incluirTarefaLista(textoTarefa)
       
    //Limpando o campo de entrada da Tarefa após a inclusão na lista
    // ***** Inclua o comando para limpar o campo aqui
    
   
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
        </div>`

}

function limparLista (){
    document.getElementById("btnLimparLista");
}


function ordenarLista(){
    document.getElementById("btnOrdenarLista");
}


function excluirTarefa(tarefa){
    const tarefaClicada = tarefa.closest("li");
    textoTarefa=tarefaClicada.textContent.trim();
    tarefas = tarefas.filter(tarefa => tarefa != textoTarefa);
    tarefaClicada.remove();
}



trimEnd