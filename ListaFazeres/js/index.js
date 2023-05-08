function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const tarefaTexto = tarefaInput.value.trim();
    if (tarefaTexto !== '') {
      const listaTarefas = document.getElementById('lista-tarefas');
      const novaTarefa = document.createElement('li');
      const novoTexto = document.createTextNode(tarefaTexto);
      novaTarefa.appendChild(novoTexto);
      listaTarefas.appendChild(novaTarefa);
      tarefaInput.value = '';
      novaTarefa.addEventListener('click', () => {
        novaTarefa.classList.toggle('checked');
      });
      const iconeExcluir = document.createElement('span');
      iconeExcluir.innerHTML = '&#x2716;';
      iconeExcluir.className = 'close';
      novaTarefa.appendChild(iconeExcluir);
      iconeExcluir.addEventListener('click', () => {
        novaTarefa.remove();
      });
    }
  }