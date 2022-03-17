import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
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
		count: 3
	};

	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = {...item};
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
		return newItem; 
		});

		this.setState ({ items: newItemList});
	};

	onClickDelete = id => {
		const newItemList = this.state.items.filter(item => item.id !==id)
		this.setState ({items: newItemList})
	};

	onClickAdd = value => {
		if (value !=='') {
			this.setState(state => ({
				items: [
					...state.items,
					{
						value,
						isDone: false,
						id: state.count + 1
					}
				],
				count: state.count + 1,
				error: false
			})); 
		}
		else {
			this.setState(state => ({error: true}))
		}
	};

	render() {
		return (
		    <div className = {styles.wrap}>    
		    <h1>Важные дела:</h1>
		    	<InputItem 
		    		onClickAdd={this.onClickAdd}
		    		error={this.state.error}
		    	/>
		    	<ItemList 
		    		items = {this.state.items} 
		    		onClickDone={this.onClickDone} 
		    		onClickDelete={this.onClickDelete}
		    	/>
		    	<Footer count={this.state.count} />
		    </div>
		);
}};


export default App;