import "./task.css"
import '../App'

export const Task = ({f_vencimiento, titulo, descripcion,  estado, OnDeleteTask, OnEditTask, OnCompleteTask, id}) => {
    let formattedDate = f_vencimiento;
    if (f_vencimiento) {formattedDate = new Date(f_vencimiento).toLocaleDateString('es-ES')}
    return (
        <div className="task">
            <h4 >{formattedDate}<span className="expired">Caducada &#128531;</span></h4>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <button className={estado === 'completado' ? "hidden" : "display"} onClick={OnCompleteTask}><img src="../img/completado.svg"/></button>
            <button onClick={() => OnEditTask({ _id: id, title: titulo, description: descripcion, status: estado, dueDate: f_vencimiento })}><img src="../img/editar.svg"/></button>
            <button className="icon" onClick={() => OnDeleteTask(id)}><img src="../img/eliminar.svg"/></button>
        </div>
    )
  }