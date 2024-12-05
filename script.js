let tarefas = [];
let estados = [];
let editIndex = -1;
function adicionar () {
    let entrada = document.getElementById('txtn').value;
    let tab = document.getElementById('tab');
    if (entrada.trim() === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    if (editIndex === -1) { // Adiciona uma nova tarefa ao array 
        tarefas.push(entrada);
        estados.push(false);
    } else {
        tarefas[editIndex] = entrada;
        editIndex -1;
    }

    atualizarLista();
    document.getElementById('txtn').value = '';
}
function atualizarLista() {
    let tab = document.getElementById('tab');
    tab.innerHTML = ''

    for (let i = 0; i < tarefas.length; i++) { 
        let item = document.createElement('option'); 
        let estado = estados[i] ? '[X]' : '[ ]'; // Define o estado da tarefa 
        item.text = `${estado} ${tarefas[i]}`;
        item.value = i; // Armazena o índice da tarefa como valor
        item.setAttribute('ondblclick', `alterarEstado(${i})`);
        tab.appendChild(item); 
    }
    document.getElementById('txtn').value = '';
}

function editar(index) { 
    let txtn = document.getElementById('txtn'); 
    txtn.value = tarefas[index]; // Exibe o valor da tarefa na caixa de texto
    editIndex = index; // Armazena o índice do item sendo editado 
    }

function alterarEstado(index) {
    estados[index] = !estados[index]; // Alterna entre concluído (true) e pendente (false) 
    atualizarLista(); // Atualiza a lista para refletir a mudança de estado 
}

function mostrarConcluidas() { 
    let tab = document.getElementById('tab'); 
    tab.innerHTML = ''; // Limpa o conteúdo anterior do elemento de seleção
    for (let i = 0; i < tarefas.length; i++) { 
        if (estados[i]) { // Verifica se a tarefa está concluída 
            let item = document.createElement('option'); 
            item.text = `[X] ${tarefas[i]}`; 
            item.value = i; // Armazena o índice da tarefa como valor item.
            item.setAttribute('ondblclick', `alterarEstado(${i})`); // Adiciona o evento de duplo clique para alterar o estado 
            tab.appendChild(item); 
        } 
    } 
}

function mostrarPendentes() { 
    let tab = document.getElementById('tab'); 
    tab.innerHTML = ''; // Limpa o conteúdo anterior do elemento de seleção 
    for (let i = 0; i < tarefas.length; i++) { 
        if (!estados[i]) { // Verifica se a tarefa está pendente 
            let item = document.createElement('option'); 
            item.text = `[ ] ${tarefas[i]}`; 
            item.value = i; // Armazena o índice da tarefa como valor item.
            item.setAttribute('ondblclick', `alterarEstado(${i})`); // Adiciona o evento de duplo clique para alterar o estado 
            tab.appendChild(item); 
        } 
    } 
}

function mostrarTodas() { 
    let tab = document.getElementById('tab'); 
    tab.innerHTML = ''; // Limpa o conteúdo anterior do elemento de seleção 
    for (let i = 0; i < tarefas.length; i++) { 
        let item = document.createElement('option'); 
        let estado = estados[i] ? '[X]' : '[ ]'; // Define o estado da tarefa 
        item.text = `${estado} ${tarefas[i]}`; 
        item.value = i; // Armazena o índice da tarefa como valor item.
        item.setAttribute('ondblclick', `alterarEstado(${i})`); // Adiciona o evento de duplo clique para alterar o estado 
        tab.appendChild(item); 
    } 
}