import React from 'react';
import TextField from '@mui/material/TextField';

const InputItem = () => (<div>
	<TextField
		id="standard-textarea"
		label="Добавить задание"
		multiline
		variant="standard"
	/>
</div>);

export default InputItem;