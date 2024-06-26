import React from "react";
import "./index.css";

interface TodoState {
	items: string[];
	text: string;
}

class Todo extends React.Component<unknown, TodoState> {
	constructor(props: unknown) {
		super(props);
		this.state = {
			items: [],
			text: "",
		};
	}

	handleSubmit(even: React.FormEvent<HTMLFormElement>) {
		even.preventDefault();
		if (this.state.text.length === 0) {
			return;
		}
		const items = this.state.items.slice();
		items.push(this.state.text);
		this.setState({ text: "", items: items });
	}

	handleDelete(index: number){
		const items = this.state.items.slice();
		items.splice(index, 1);
		this.setState({ items: items });
	}

	handleChange(even: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ text: even.target.value });
	}

	render() {
		return (
			<div>
				<h3>Список справ</h3>
				<TodoList items={this.state.items} onDelete={(index)=>this.handleDelete(index)} />
				<form className="todo-form" onSubmit={(ev) => this.handleSubmit(ev)}>
					<label htmlFor="new-todo">Що потрібно зробити?</label>
					<input
						id="new-todo"
						onChange={(ev) => this.handleChange(ev)}
						value={this.state.text}
					/>
					<button type="submit">Додати #{this.state.items.length + 1}</button>
				</form>
			</div>
		);
	}
}

interface TodoListProps {
	items: string[];
	onDelete: (index: number)=>void
}

export class TodoList extends React.Component<TodoListProps> {
	render() {
		return (
			<ul className="todo-list">
				{this.props.items.map((item, index) => (
					<li key={`key-li-${index.toString()}`}>{item} <button type="button" onClick={()=>this.props.onDelete(index)}>Видалити</button></li>
				))}
			</ul>
		);
	}
}

export default Todo;
