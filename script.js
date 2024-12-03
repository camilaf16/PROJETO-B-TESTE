let tarefas = [];
function adicionar () {
    let entrada = document.getElementById('txtn').value;
    if (entrada.trim() === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    tarefas.push(entrada);
}



let input = document.createElement('txtn').value;
tarefas.push(input)
updateList();
let listElement = document.getElementById('tab');
listElement.innerHTML = '';
tarefas.forEach(function(item) {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    listElement.appendChild(listItem);
})