document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Por favor, escribe una tarea.');
            return;
        }

        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.textContent = taskText;
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);

        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});