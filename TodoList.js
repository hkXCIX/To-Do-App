import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function TodoList() {
	
	const [todos, setTodos] = useState([]);
	
	const addTodo = todo => {
		//this is to make sure input won't be blank and spaces are auto removed
		if(!todo.text || /^\s*$/.test(todo.text)){
			return;
		}

		const newTodos = [todo, ...todos]

		setTodos(newTodos);
	}

	const removeTodo = id => {
		const removedItem = [...todos].filter(todo => todo.id !== id);

		setTodos(removedItem)
	}

	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete
			}
			return todo
		})
		setTodos(updatedTodos)
	}

	const updateTodo = (todoId, newVal) => {
		if(!newVal.text || /^\s*$/.test(newVal.text)){
			return;
		}

		setTodos(
			prev => prev.map(
				item => (
					item.id === todoId ? newVal: item)))
	}

	return (
		<div>
			<h1>
				Todo App
			</h1>
			<p>
				To remove click <RiCloseCircleLine/>
			</p>
			<p>
				To update click <TiEdit/>
			</p>
			<TodoForm onSubmit={addTodo} />
			<Todo
				todos = {todos}
				completeTodo = {completeTodo} 
				removeTodo = {removeTodo}
				updateTodo = {updateTodo}
				/>
		</div>
	);
}

export default TodoList
