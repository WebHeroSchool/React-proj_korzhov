import React from 'react';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import styles from './InputItem.module.css'
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';

class InputItem extends React.Component {
	state = {
		inputValue: ''
	};

	onButtonClick = () => {
		this.setState({
			inputValue:''
		});

		this.props.onClickAdd(this.state.inputValue);
	}

	render(){
		const isError = this.props.error;
		const {onClickAdd} = this.props;
		let textField;

		if (isError) {
			textField = <TextField
				error
				id="standard-textarea"
				label="Добавить задание"
				multiline
				variant="standard"
				defaultValue=""
				helperText="Поле не может быть пустым"
				value={this.state.inputValue}
				onChange={event => this.setState({inputValue: event.target.value})}
			/>
		}
		else {
			textField = <TextField
				id="standard-textarea"
				label="Добавить задание"
				multiline
				variant="standard"
				value={this.state.inputValue}
				onChange={event => this.setState({inputValue: event.target.value})}
			/>
		}


		return (
			<div className={styles.input}>
			<ListItemIcon className = {styles.field}>
				{textField}
 			</ListItemIcon>

			<Fab 
				size="small" 
				color="primary" 
				aria-label="add" 
				onClick = {this.onButtonClick}>
				<AddIcon />
			</Fab>
			</div>)
	}
}

InputItem.defaultProps = {
	value: 'Добавить задание'
}

export default InputItem;