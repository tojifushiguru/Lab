const table = document.getElementById('content');
const task = document.getElementById('task');
const addTask = document.getElementById('addTask');
const finishDate = document.getElementById('date');
const markDone = document.getElementById('mark-done');
const taskId = document.getElementById('task-id');
const clearTasks = document.getElementById('clear-tasks');

const newData = {description: 'Hello World', targetDate: '2025-10-10'}

const options = {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newData)};

const url = 'http://localhost:8080/users/markjoseph/todos'

getData();

async function getData() {
    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("An error occured while loading your data");
        }

        const datas = await response.json();
        
        for(let data of datas) {
            let item = document.createElement('tr');
            let id = document.createElement('td');
            let desc = document.createElement('td');
            let targetDate = document.createElement('td');

            id.textContent = data.id;
            desc.textContent = data.description;
            targetDate.textContent = data.targetDate;

            console.log(data);

            item.append(id, desc, targetDate);
            table.appendChild(item);

            if(data.done === true) {
                desc.style.textDecoration = 'line-through';
            }
        }
        
    } catch(error) {
        console.error(error);
    }
}

markDone.addEventListener('click', async function() {
    try {
        const id = Number(taskId.value);

        if(id == '') {
            alert('No id provided!');
            return;
        }

        const updatedData = {done: true};
        const option = {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(updatedData)};
        const response = await fetch(url + `/${id}`, option);

        if(!response.ok) {
            throw new Error("An error while updating your data");
        }
        
        window.location.reload();

    } catch(error) {
        console.log(error)
    }
})

addTask.addEventListener('click', async function() {
    try {

        if(task.value == '' || finishDate.value == '') {
            alert('Please enter a date/task');
            return;
        }

        const newData = {description: String(task.value), targetDate: String(finishDate.value)};
        const response = await fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newData)});

        if(!response.ok) {
            throw new Error("Error saving data");
        }

        window.location.reload();

    } catch(error) {
        console.log(error)
    }
})

clearTasks.addEventListener('click', async function() {
    try {

        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("Error fetching data");
        }

        const datas = await response.json();
        const option = {method: 'DELETE', headers: {'Content-Type': 'application/json'}};

        for(let data of datas) {
            const response = await fetch(url + `/${data.id}`, option);
            if(!response.ok) {
                throw new Error("Error deleting data");
            }
        }

        window.location.reload();
        
    } catch(error) {
        console.log(error)
    }
})


