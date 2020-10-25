import React, {useState, useRef, useEffect} from 'react'

function TodoForm(props) {
	const [input, setInput] = useState("")

	const inputRef = useRef(null)
	
	useEffect(() => {
		inputRef.current.focus()
	})
	
	const handleChange = e => {
		setInput(e.target.value);
	}

	const handleSubmit = e => {
			e.preventDefault()

			//creating id values for each todo to be able to edit or update later
			props.onSubmit({
				id: Math.floor(Math.random() * 100000),
				text: input
			})
			setInput("");
		};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
		{props.edit ? 
		(
			<>
				<input
				placeholder="Update todo"
				value={input}
				name="test"
				className="update todo-input"
				ref={inputRef}
				onChange={handleChange}
				/>
				<button onClick={handleSubmit} className="edit todo-button">
				Update
				</button> 
			</>
		) 
		: 
		(
			<>
				<input 
				placeholder="Add a todo" 
				value={input}
				name="text" 
				className="todo-input"
				ref={inputRef}
				onChange={handleChange}
				/>
				<button onClick={handleSubmit} className="todo-button">
					Add todo
				</button>
			</>
		)}	
		</form>
	)
}

export default TodoForm;
