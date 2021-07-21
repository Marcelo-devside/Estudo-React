import React from 'react'; //atalho teclas ' imr ' + tab
import './Task.css' 
const Task = ({task}) => {  //atalho teclas ' sfc ' + tab
    return ( <div className="Task-container">
        {task.title}
    </div> );
}
 
export default Task;