import React from 'react';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import styles from './InputItem.module.css'
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';

const InputItem = () => (<div className={styles.input}>
	<ListItemIcon className = {styles.field}>
		<TextField
			id="standard-textarea"
			label="Добавить задание"
			multiline
			variant="standard"
		/>
 	</ListItemIcon>

	<Fab size="small" color="primary" aria-label="add">
		<AddIcon />
	</Fab>

</div>);

export default InputItem;