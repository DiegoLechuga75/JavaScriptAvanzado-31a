const tasksContainer = document.querySelector('#tasks-container');
const form = document.querySelector('form');
const dbUrl = 'http://localhost:3000/tasks';

function renderTasks(responseJson) {
    for (let i = 0; i < responseJson.length; i++) {
        const task = document.createElement('div');
        const taskHtml = `
        <span class="task-body">${responseJson[i].task}</span>
        <span class="task-status">${responseJson[i].status}</span>
        <button>Editar</button>
        <button>Eliminar</button>
        `
        task.innerHTML = taskHtml;
        tasksContainer.appendChild(task);
    }
}

async function getAllTasks() {
    const response = await fetch(dbUrl);
    const responseJson = await response.json();
    console.log(responseJson);
    renderTasks(responseJson);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputTaskBody = document.querySelector('#taskBody');
    const taskBody = inputTaskBody.value;

    const allTasks = await fetch(dbUrl);
    const allTasksJson = await allTasks.json();
    const taskId = allTasksJson.length + 1;

    const configPost = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: taskId, task: taskBody, status: 'not started'
        })
    };

    const rawResponse = await fetch(dbUrl, configPost);
    const content = await rawResponse.json();
})



getAllTasks();