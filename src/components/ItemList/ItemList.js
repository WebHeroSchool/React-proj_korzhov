import React from 'react';
import styles from './ItemList.module.css'
import Item from '../Item/Item.js';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const ItemList = ({items, isDone, onClickDone}) => (<div>
	{items.map(item => 
		<ListItem key={item.id} className={styles.item}>
        	<ListItemIcon>
           		<Checkbox color="primary" inputProps={{'aria-label': 'uncontrolled-checkbox'}} onClick = {() => console.log(item.isDone)} />
         	</ListItemIcon>
         	
         	<ListItemText> 
         		<Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
         	</ListItemText>
            
			<IconButton aria-label="delete">
				<DeleteIcon />
			</IconButton>
       	</ListItem>)}
</div>);

export default ItemList;