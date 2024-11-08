const taskInput = document.querySelector(`#taskInput`);
const addTaskButton = document.querySelector(`#addTaskButton`);
const taskList = document.querySelector(`#taskList`);
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.classList.add('delete-btn');

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Введіть текст завдання!');
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});