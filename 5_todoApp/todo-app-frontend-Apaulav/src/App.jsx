import { useEffect, useState } from "react";
import './App.css'
import { Task } from './components/task'
import taskApi from './apiService/taskApi'

function App() {
  let statusFilterOfListTask = ''
  const [listInProgress, setListInProgress] = useState('');
  const [tasks, setTasks] =useState([])
  const [styleButton, setstyleButton] = useState("display")
  const [styleEdit, setstyleEdit] = useState("hidden")
  /* const [title, settitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [description, setdescription] = useState('')
  const [status, setstatus] = useState('') */
  const [refresh, setRefresh] = useState(false)
  const [editTask, setEditTask] = useState({})

  const tareas = async () => {
    const task = await taskApi.getAllTask()
    //console.log("Tareas: ", task)
    setTasks(task)
  }

  useEffect(() => {
    tareas()
  }, [refresh])

  const addTaskButton = () => {
    console.log('Añadir')
    if (styleButton == "display") setstyleButton("hidden");
        else setstyleButton("display");
    if (styleEdit == "hidden") setstyleEdit("display form")
        else setstyleButton("hidden");
  }
  
  const addFormTaskButton = async () => {
    //console.log(editTask.title)
    if (editTask.title && editTask.status ){
      await taskApi.addTask(editTask)
      if (styleButton === "hidden") setstyleButton("display");
          else setstyleButton("hidden");
      if (styleEdit === "display form") setstyleEdit("hidden")
          else setstyleButton("display form");
      setRefresh(!refresh)
      setEditTask({})
    } else console.log('Titulo no cambiado: ')
    
  }

  const deleteTask = async (_id) => {
    //console.log(_id)
    await taskApi.deleteTask(_id)
    setRefresh(!refresh)
  }

  const editTaskClic = (task) => {
    console.log('Editando', task)
    setEditTask(task)
    if (styleButton === "hidden") setstyleButton("display");
        else setstyleButton("hidden");
    if (styleEdit === "hidden") setstyleEdit("display form")
        else setstyleButton("hidden");
  }

  const updateTaskButton = async () => {
    await taskApi.updateTask(editTask)
    if (styleButton === "hidden") setstyleButton("display");
        else setstyleButton("hidden");
    if (styleEdit === "display form") setstyleEdit("hidden")
        else setstyleButton("display form");
    setRefresh(!refresh)
    setEditTask({})
  }

  const completeTaskButton = async (_id) => {
    console.log('Click')
    await taskApi.checkCompleteTask(_id)
    setRefresh(!refresh)
  }

  
  return (
    <>
      <h1 className='app-title'>Todo App</h1>
      <p>
      <button className={styleButton} onClick={addTaskButton}>Añadir tarea</button></p>
      <form className={styleEdit} onSubmit={e => e.preventDefault()}>
          <h2 >{editTask._id ? 'Editar Tarea' : 'Añadir Tarea'}</h2>
          <label className="label" htmlFor="title">Título: </label>
          <input type="text" name="title" id="title" value={editTask.title || ''} onChange={e => setEditTask({ ...editTask, title: e.currentTarget.value })} required/>
          <br/>
          <label className="label" htmlFor="descript">Descripción: </label>
          <textarea name="descript" id="descript" cols="21" rows="5" value={editTask.description || ''} onChange={event => setEditTask({ ...editTask, description: event.currentTarget.value })}></textarea>
          <br/>
          <label className="label" htmlFor="dueDate">Fecha fin: </label>
          <input type="date" name="dueDate" id="dueDate" value={editTask.dueDate || ''} onChange={event => setEditTask({ ...editTask, dueDate: event.currentTarget.value })}/>
          <br/>
          <label className="label" htmlFor="status">Estado: </label>
          <select name="status" value={editTask.status || ''} onChange={event => setEditTask({ ...editTask, status: event.currentTarget.value })} required>
            <option value={''} disabled hidden>Selecciona un estado</option>
            <option value={"pendiente"}>Pendiente</option>
            <option value={"en_curso"}>En curso</option>
            <option value={"completado"}>Completada</option>
          </select>
          <br/>
          <button type="submit" onClick={editTask._id ? updateTaskButton : addFormTaskButton}>{editTask._id ? 'Guardar Cambios' : 'Añadir'}</button>
        </form>
      <section className='section-listClass'>
      
         <div className="listClass">
          <h2 className="list-title">En curso</h2>
          {statusFilterOfListTask = tasks.filter ( tarea => tarea.status === "en_curso").map( filteredTask => (
            <Task id={filteredTask._id}  listTitle={"Encurso"} f_vencimiento={filteredTask.dueDate} titulo={filteredTask.title} descripcion ={filteredTask.description} estado = {filteredTask.status} OnDeleteTask={deleteTask} OnEditTask={editTaskClic}  OnCompleteTask={completeTaskButton}  key={filteredTask._id}/>
          ))}
        </div>
        <div className="listClass">
          <h2 className="list-title">Pendientes</h2>
          {statusFilterOfListTask = tasks.filter ( tarea => tarea.status === "pendiente").map( filteredTask => (
            <Task id={filteredTask._id}  listTitle={"En curso"} f_vencimiento={filteredTask.dueDate} titulo={filteredTask.title} descripcion ={filteredTask.description} estado = {filteredTask.status} OnDeleteTask={deleteTask} OnEditTask={editTaskClic}  OnCompleteTask={completeTaskButton}  key={filteredTask._id}/>
          ))}
        </div>
        <div className="listClass">
          <h2 className="list-title">Completadas</h2>
          {statusFilterOfListTask = tasks.filter ( tarea => tarea.status === "completado").map( filteredTask => (
            <Task id={filteredTask._id}  listTitle={"En curso"} f_vencimiento={filteredTask.dueDate} titulo={filteredTask.title} descripcion ={filteredTask.description} estado = {filteredTask.status} OnDeleteTask={deleteTask} OnEditTask={editTaskClic} key={filteredTask._id}/>
          ))}
          
        </div>
      </section>
    </>
  )
}

export default App
