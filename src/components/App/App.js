import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
	const items = [
		{
			value: 'Сверстать сайт по макету',
			id: 1, 
			isDone: true
		},
		{
			value: 'Написать комментарии',
			id: 2,
			isDone: false
		},
		{
			value: 'Уточнить информацию в footer',
			id: 3,
			isDone: true
		}	
	];

	return (
	    <div className = {styles.wrap}>    
	    <h1>Важные дела:</h1>
	    	<InputItem />
	    	<ItemList items = {items} />
	    	<Footer count={8} />
	    </div>);
}

export default App;