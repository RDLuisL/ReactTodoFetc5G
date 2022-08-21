import React, { useEffect, useState } from "react";

import FormTodo from "./FormTodo.jsx";
import TaskList from "./TaskList.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const handleAddItem = addItem => {
		setList([...list, addItem]);
	};
//=================== Fetch - GET =============================

	const getTask = ()=>{
		fetch('https://assets.breatheco.de/apis/fake/todos/user/luisls')
		.then(data=>data.json())
		.then(response=>setList(response))
	}

//============================== Fetch - PUT ==========================================
		const putTask = ()=>{

			let header = new Headers();
			header.append("Content-Type", "application/json")

			let cuerpo =JSON.stringify([
				{"label": obj.label,
				"done": false
				}
			])
			let requestOptions={
				method: 'PUT',
				headers: header,

				body: cuerpo,
				redirect:'follow'
			}
		fetch('https://assets.breatheco.de/apis/fake/todos/user/luisls', requestOptions) 
			.then(data=>data.json())
			.then(response=>setList(response))
			
		}
		useEffect(()=>{
			getTask();
		},[])
	return (
		<div>
			<h1>Todos</h1>
			<FormTodo list={list} setList={setList} handleAddItem={handleAddItem} />
			<TaskList list={list} setList={setList} />
		</div>
	);
};

export default Home;
