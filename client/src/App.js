import './App.css';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useState } from 'react';

function App() {
	const [input, setInput] = useState('');
	const [createTodo] = useMutation(CREATE_TODO);

	const [deleteTodo] = useMutation(REMOVE_TODO);

	const { data, loading, error } = useQuery(READ_TODOS);

	if (loading) return <p>loading...</p>;
	if (error) return <p>ERROR</p>;
	if (!data) return <p>Not found</p>;
  //Solucionar problemas de reload -> utilizando el apollo client cache memory
	const handleSubmit = (e) => {
		e.preventDefault();
		createTodo({ variables: { text: input } });
		setInput('');
		window.location.reload();
	};
	const handleDelete = (id) => {
		deleteTodo({ variables: { id } });
		window.location.reload();
	};
	return (
		<div className="app">
			<h3>Create New Todo</h3>
			<form onSubmit={handleSubmit}>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="form-control"
					type="text"
					placeholder="Enter todo"
				></input>
				<button className="btn btn-primary px-5 my-2" type="submit">
					Submit
				</button>
			</form>
			<ul>
				{data.todos.map((todo) => (
					<li key={todo.id}>
						<span className={todo.completed ? 'done' : 'pending'}>{todo.text}</span>
						<button className="btn btn-sm btn-danger rounded-circle float-right" onClick={()=>handleDelete(todo.id)}>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

const READ_TODOS = gql`
	query getTodos {
		todos {
			id
			text
			completed
		}
	}
`;

const CREATE_TODO = gql`
	mutation CreateTodo($text: String!) {
		createTodo(text: $text)
	}
`;

const REMOVE_TODO = gql`
	mutation RemoveTodo($id: String!) {
		removeTodo(id: $id)
	}
`;

export default App;
