import React from 'react';
import styles from './ItemList.module.css'
import Item from '../Item/Item.js';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import PropTypes from 'prop-types'


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

ItemList.propTypes = {
	items: PropTypes.array,
	onClickDone: PropTypes.func,
	onClickDelete: PropTypes.func
};

export default ItemList;