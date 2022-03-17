import React from 'react';
import styles from './ItemList.module.css'
import Item from '../Item/Item.js';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';


const ItemList = ({items, onClickDone, onClickDelete}) => (<div>
	{items.map(item => 
		<div key={item.id} className={styles.item}>
         		<Item 
         			value={item.value} 
         			isDone={item.isDone} 
         			onClickDone={onClickDone}
         			onClickDelete={onClickDelete}
         			id = {item.id} 
         		/>
       	</div>)}
</div>);

export default ItemList;