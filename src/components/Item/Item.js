import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types'

const Item = ({value, isDone, onClickDone, id, onClickDelete}) => (<span className = {
	classnames ({
		[styles.item]: true,
		[styles.done]:isDone
	})
}>
	{value}
</span>);

Item.propTypes = {
	isDone: PropTypes.bool,
	value: PropTypes.string,
	id: PropTypes.number,
	onClickDone: PropTypes.func,
	onClickDelete: PropTypes.func
};

export default Item;