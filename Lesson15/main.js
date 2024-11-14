const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

window.addEventListener('load', initTodos);

function initTodos() {
  const todos = localStorage.getItem('todos');
  if (todos) {
    JSON.parse(todos).forEach(todo => buildTodoItem(todo.text, todo.uuid, todo.completed));
  }
}

function buildTodoItem(text, uuid, completed = false) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  if (completed) li.classList.add('todo-item--checked');
  li.setAttribute('data-uuid', uuid);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;
  checkbox.addEventListener('change', toggleTodo);

  const span = document.createElement('span');
  span.className = 'todo-item__description';
  span.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'todo-item__delete';
  deleteButton.textContent = 'Видалити';
  deleteButton.addEventListener('click', deleteTodo);

  li.append(checkbox, span, deleteButton);
  todosWrapper.append(li);
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === '') return;

  const uuid = Date.now(); 
  buildTodoItem(text, uuid);
  saveTodoToLocalStorage(text, uuid, false);

  form.reset(); 
});

function saveTodoToLocalStorage(text, uuid, completed) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push({ text, uuid, completed });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo() {
  const li = this.closest('.todo-item');
  const uuid = +li.getAttribute('data-uuid');

  li.remove();

  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedTodos = todos.filter(todo => todo.uuid !== uuid);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

function toggleTodo() {
  const li = this.closest('.todo-item');
  const uuid = +li.getAttribute('data-uuid');
  li.classList.toggle('todo-item--checked');

  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedTodos = todos.map(todo => {
    if (todo.uuid === uuid) {
      return { ...todo, completed: this.checked };
    }
    return todo;
  });
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
}
