import React, {useState} from "react";

const FormTodo = props => {
    const { handleAddItem } = props;
    const [ newTodo, setNewTodo ] = useState("");
    const { list,setList } = props;   
    
    const [todos, setTodos] = useState("");
    const handleSummit = eventos => {

        eventos.preventDefault();

       /*handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            todos
        });*/

        const aux = list.push ({ label : newTodo, done : false })
              
        
        console.log(aux);
    };
    return (
        <form onSubmit={handleSummit}>    
            <div className="todo-list">
                <div className="file-input">
                    <input 
                        type="text"
                        className="text"
                        value={newTodo}
                        onChange={eventos => setNewTodo(eventos.target.value)}
                    />
                                       
                    <button
                        className="button pink btn btn-success"
                        // este modulo es el condicional que si el valor del arreglo esta vacio se desabilita
                        disabled={list ? "" : "disable"}
                    > ➕
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormTodo;
