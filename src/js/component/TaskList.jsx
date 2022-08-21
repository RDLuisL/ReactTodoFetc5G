import React from "react";
import Checkbox from "./Checkbox.jsx";

const TaskList = props => {
    const { list, setList } = props;
    
    const onChangeStatus = evento => {
        const { name, checked } = evento.target;
        
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };
    const onClickRemoveItem = evento => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };
    
    
    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />

    ));
    
   const deleteTask = (index) => {
    const aux = list.splice (index,1)
    setList(aux)
    console.log(list) 
}


   
    return (
        <>
        { list.length ?  (list.map((task,indexTask)=>
        <>
        <p>{task.label}</p><button onClick={()=>deleteTask(indexTask)} className="btn btn-danger">{indexTask}</button>
        </>
        
        )) :
        <p>No Task</p>
    }
    </>
        
        
       // {list.length ? chk : "No task"}
       // {list.length ? (
        );
    };

export default TaskList;
