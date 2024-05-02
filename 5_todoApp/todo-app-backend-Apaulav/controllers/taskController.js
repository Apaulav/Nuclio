const {captureRejectionSymbol}=require("supertest/lib/test")
const taskModel = require("../models/task.model")

/*funciones*/

//Lista de tareas sin completar
const incompleteTask = (req, res) => {
    //const taskIncomplete = tasks.filter( task => task.status !== "Completado")
     taskModel.find()
    .then(taskDb => {
        //console.log(taskDb)
        return res.status(200).json(taskDb)
    })
    .catch(err => {return res.status(500).json(err)}) 
   /*  if (taskIncomplete.length)  return res.status(200).json(taskIncomplete)
    res.json("No hay ninguna tarea, añadela!") */
}

//Lista de tareas por id
const findTask = (req, res) => {
    taskModel.findById(req.params.id)
    .then(taskDb => {
        if (!taskDb) {return res.status(404).json({ msg: "Task not found" })}
        else return res.status(200).json(taskDb);
        /* console.log("/task/:id ",taskDb)
        return res.status(200).json(taskDb._id) */
    })
    .catch(err => {return res.status(403).json({ msg: "Forbidden" })}) 

}

//Actualiza tarea
const updateTask = (req, res) => {
    //console.log(req.params.id)
        taskModel.findByIdAndUpdate(req.params.id, {$set :req.body},{new:true})
        .then(taskDb => {
            //console.log(taskDb)
            if (!taskDb) {return res.status(404).json({ msg: "Task not found" })}
            else return res.status(200).json({ msg: "Task updated" });
        })
        .catch(err => {return res.status(403).json({ msg: "Forbidden" })})
        //console.log("params: ",req.params.id)
        //console.log("id", task.id)  
}

//Borrar tarea
const deleteTask = (req, res) => {
    /* tasks = tasks.filter(task => task.id !== req.params.id)
    res.json({"msg": "Task removed successfully"}) */
    taskModel.findByIdAndDelete(req.params.id)
    .then(taskDb => {
        if (!taskDb) {
            // Si la tarea no se encuentra, devuelve un código de estado 404
            return res.status(404).json({ msg: "Task not found" });
        }else {
            // Si la tarea se eliminó correctamente, devuelve un mensaje de éxito
            return res.status(200).json({ msg: "Task removed successfully" });
        }
        
    })
    .catch(err => {return res.status(403).json({ msg: "Forbidden" })}) 

}

//Añadir nueva tarea
const addTask = (req, res) => {
    console.log(req.body)
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ msg: "You missed parameter 'title'" });
    }
    taskModel.create(req.body)
    .then(taskDb => {
        return res.status(201).json({ msg: "Task created", id: taskDb._id })
    })
    .catch( err=>{ return res.status(500).json(err)})
}

//Marcar tarea como hecha
const checkCompleteTask = (req, res) => {
    taskModel.findOneAndUpdate({ _id: req.params.id }, {status: 'completado'})
    .then (taskDb => {
        return res.json({"msg": "Task marked as completed"})
    }
    )   
}



module.exports = {
    //funciones
    incompleteTask,
    findTask,
    updateTask,
    deleteTask,
    addTask,
    checkCompleteTask
}