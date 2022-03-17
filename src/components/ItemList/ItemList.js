import React from 'react';
import styles from './ItemList.module.css'
import Item from '../Item/Item.js';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const ItemList = ({items, isDone, onClickDone, id, onClickDelete}) => (<div>
	{items.map(item => 
		<ListItem key={item.id} className={styles.item}>
        	<ListItemIcon>
           		<Checkbox 
           			color="primary" 
           			inputProps={{'aria-label': 'uncontrolled-checkbox'}} 
           			onClick = {() => onClickDone(item.id)} />
         	</ListItemIcon>
         	
         	<ListItemText> 
         		<Item 
         			value={item.value} 
         			isDone={item.isDone} 
         			onClickDone={onClickDone}
         			onClickDelete={onClickDelete}
         			id = {item.id} />
         	</ListItemText>
            
			<IconButton aria-label="delete" onClick = {() => onClickDelete(item.id)}>
				<DeleteIcon />
			</IconButton>
       	</ListItem>)}
</div>);

export default ItemList;