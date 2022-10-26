import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

const App = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		fetchUsers()
		fetchTodos()
	},[])

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
			setUsers(response.data)
		} catch (e) {
			console.log(e)
		}
	}

	async function fetchTodos() {
		try {
			const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
			setTodos(response.data)
		} catch (e) {
			console.log(e)
		}
	}

	const shuffle = (array: any) => {
		return array.sort(() => Math.random() - 0.5);
	}

	let arr = [1, 2, 3,4,5,6,7,8];
	console.log(shuffle(arr))
	console.log(shuffle(arr))
	console.log(shuffle(arr))
	console.log(shuffle(arr))
	console.log(shuffle(arr))

	return (
		<div>
			<EventsExample/>
			<Card
				variant={CardVariant.primary}
				width="200px"
				height="200px"
				onClick={(num: number) => console.log('click!', num)}
			>
				<button type='button'>Button</button>
			</Card>
			{/*<UserList users={users}/>*/}
			<List
				items={users}
				renderItem={(user:IUser) => <UserItem user={user} key={user.id}/> }
			/>
			<List
				items={todos}
				renderItem={(todo:ITodo) => <TodoItem todo={todo} key={todo.id}/> }
			/>
		</div>
	)
}

export default App;