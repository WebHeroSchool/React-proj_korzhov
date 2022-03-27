import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () => (
		<Router>
			<div className = {styles.wrap}>    
				<Card className={styles.card}>
					<MenuList className={styles.menu}>
						<Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
						<Link to='/todo' className={styles.link}><MenuItem>Важные дела</MenuItem></Link>
						<Link to='/contacts' className={styles.link}><MenuItem>Контакты</MenuItem></Link>
					</MenuList>
				
					<Routes>
						<Route path='/' exact element={<About/>} />
						<Route path='/todo' element={<Todo/>} />
						<Route path='/contacts' element={<Contacts/>} />
					</Routes>
				</Card>

			</div>
		</Router>);

export default App;