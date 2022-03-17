import React from 'react';
import styles from './Footer.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="one">All</Button>,
  <Button key="two">Active</Button>,
  <Button key="three">Completed</Button>,
];

const Footer = ({count}) => (<footer className ={styles.wrap}>
	<div className = {styles.todoleft}>
		Вот столько дел ещё осталось сделать: {count} 
	</div>

	<div className = {styles.choose}>
		<div className = {styles.mainbtn}>
			<ButtonGroup size="small" aria-label="small button group">
				{buttons}
			</ButtonGroup>
		</div>
		<Button size="small">Clear completed</Button>
	</div>

</footer>);

Footer.defaultProps = {
	count:0
};

export default Footer;