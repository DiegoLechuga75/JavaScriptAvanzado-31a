const tasksContainer = document.querySelector('#tasks-container');
const form = document.querySelector('form');
const dbUrl = 'http://localhost:3000/tasks';

function renderTasks(responseJson) {
    for (let i = 0; i < responseJson.length; i++) {
        const task = document.createElement('div');
        const taskHtml = `
        <span class="task-body">${responseJson[i].task}</span>
        <span class="task-status">${responseJson[i].status}</span>
        <button id="edit-${responseJson[i].id}">Editar</button>
        <button>Eliminar</button>
        `
        task.innerHTML = taskHtml;
        task.setAttribute('id', `task-${responseJson[i].id}`);
        tasksContainer.appendChild(task);

        const editBtn = document.querySelector(`#edit-${responseJson[i].id}`);
        editBtn.addEventListener('click', (e) => {
            editBtnHandler(e);
        })
    }
}

function editBtnHandler(e) {
    const buttonClickedId = e.target.id;
    const id = buttonClickedId.slice(5)
    const taskToEdit = document.querySelector(`#task-${id}`);
    taskToEdit.innerHTML = `
    <input type="text" id="edit-input-${id}"></input>
    <button id="edit-done-${id}">Listo!</button>
    `
    const editDone = document.querySelector(`#edit-done-${id}`);
    const editInput = document.querySelector(`#edit-input-${id}`);

    /* creeriamos que asi se resuleve, pero creeriamos mal 
            editDone.addEventListener('click', editHandler(editInput, id)); 
            */
    editDone.addEventListener('click', () => {
        editDoneHandler(editInput, id);
    });
}

async function editDoneHandler(editInput, id) {
    const editedBody = editInput.value;
    const configPatch = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            task: editedBody
        })
    };
    const rawResponse = await fetch(`${dbUrl}/${id}`, configPatch);
    const content = await rawResponse.json();
    renderTasks(content);
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
    renderTasks(content);
})



getAllTasks();