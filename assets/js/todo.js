// Array de JSON
let data = [];
function renderTodo() {
  // Limpa a Lista
  // Bug evitado: Escrever todos os itens da lista de novo
  document.querySelector(".todo").innerHTML = "";

  data.forEach((task) => {
    let li = document.createElement("li");

    li.innerHTML = `
  <input type="checkbox" id="task-${task.id}" />
  <label for="task-${task.id}">${task.title}</label>
  <button type=button>x</button>
  `;

    li.querySelector("input").addEventListener("change", (e) => {
      if (e.target.checked) {
        //  Adiciona a classe CSS no HTML
        li.classList.add("complete");
      } else {
        //  Adiciona a classe CSS no HTML
        li.classList.remove("complete");
      }
    });

    // função para deletar o item da lista
    li.querySelector("button").addEventListener("click", (e) => {
      let button = e.target;
      let li = button.parentNode;
      let input = li.querySelector("input");
      let id = input.id;
      let idArray = id.split("-");
      let todoId = idArray[1];

      data = data.filter((task) => task.id !== parseInt(todoId));

      renderTodo();
    });

    // Adiciona o elemento no final da lista
    document.querySelector(".todo").append(li);
  });
}

/*
1. Insere o input
2. Limpa o Input
3. Redesenha a Lista
*/
document.querySelector("#new-task").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    // Adiciona Elemento ao Array
    data.push({
      id: data.length + 1,
      title: e.target.value,
    });
    // Limpa o Input
    e.target.value = "";

    renderTodo();
  }
});

renderTodo();
