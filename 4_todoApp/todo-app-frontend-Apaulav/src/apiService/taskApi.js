const baseUrl = 'http://localhost:3000'

const getAllTask = async () => {
    return  fetch(`${baseUrl}/tasks`)
    .then(response => response.json())
}

const addTask = async (editTask) => {
    //console.log("addtask titulo: ", editTask)
    return  fetch(`${baseUrl}/tasks`, {method: 'POST', body: JSON.stringify(editTask), headers: {"Content-Type": "application/json"}})
    .then(response => response.json())
}

const deleteTask = async (_id) => {
    //console.log("Como es el id", _id)
    return  fetch(`${baseUrl}/tasks/${_id}`, {method: 'DELETE'})
    .then(response => response.json())
}

const updateTask = async (editTask) => {
    //console.log("updateTask titulo: ", editTask)
    return  fetch(`${baseUrl}/tasks/${editTask._id}`, {method: 'PUT', body: JSON.stringify(editTask), headers: {"Content-Type": "application/json"}})
    .then(response => response.json())
}

const checkCompleteTask = async (editTask) => {
    console.log("checkCompleteTask titulo: ", editTask._id)
    /* return  fetch(`${baseUrl}/tasks/${editTask._id}`, {method: 'PATCH', body: JSON.stringify(editTask), headers: {"Content-Type": "application/json"}})
    .then(response => response.json()) */
}

export default {
    getAllTask,
    addTask,
    deleteTask,
    updateTask,
    checkCompleteTask
}

