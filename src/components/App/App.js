import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
	const initialState = {
		items : [
			{
				value: 'Сверстать сайт по макету',
				id: 1, 
				isDone: false
			},
			{
				value: 'Написать комментарии',
				id: 2,
				isDone: false
			},
			{
				value: 'Уточнить информацию в footer',
				id: 3,
				isDone: false
			}],
		count: 3,
		number: 3,
		error: false
	}

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);
	const [error, setError] = useState(initialState.error);
	const [number, setNumber] = useState(initialState.number);

	useEffect(() => {
		console.log('ComponentDidMount')
	})
	
	useEffect(() => {
		console.log('ComponentDidUpdate')
	})

	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = {...item};
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
		return newItem; 
		});
		
		setItems (newItemList);
	};

	const onClickDelete = id => {
		const newItemList = items.filter(item => item.id !==id)
		setItems (newItemList)
		setCount (count - 1)
	};

	const onClickAdd = value => {
		if (value !=='') {
			const newItemList = [
				...items,
					{
						value,
						isDone: false,
						id: number + 1
					}
				]
				setItems(newItemList)
				setCount(count + 1)
				setError(false)
				setNumber(number + 1)
		}
		else {
			setError(true)
		}
	};

	return (
		<div className = {styles.wrap}>    
		<h1>Важные дела:</h1>
			<InputItem 
				onClickAdd={onClickAdd}
				error={error}
			/>
			<ItemList 
				items = {items} 
				onClickDone={onClickDone} 
				onClickDelete={onClickDelete}
			/>
			<Footer count={count} />
		</div>
	);

}

export default App;