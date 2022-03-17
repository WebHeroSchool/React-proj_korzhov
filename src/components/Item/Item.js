import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Item = ({value, isDone, onClickDone, id, onClickDelete, item}) => (
	<div>
		<ListItem>
			<ListItemIcon>
	           	<Checkbox 
	       			color="primary" 
	       			inputProps={{'aria-label': 'uncontrolled-checkbox'}} 
	       			onClick = {() => onClickDone(id)} 
	       		/>
	        </ListItemIcon>

	        <ListItemText> 
				<span className = {
					classnames ({
						[styles.item]: true,
						[styles.done]: isDone
					})
				}>
					{value}
				</span>;
	        </ListItemText>

			<IconButton aria-label="delete" onClick = {() => onClickDelete(id)} >
				<DeleteIcon />
			</IconButton>
		</ListItem>
	</div>);
	
Item.defaultProps = {
	isDone: false,
	id:0
};

export default Item;