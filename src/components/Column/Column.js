import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ItemTypes from '../ItemTypes';

const style = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}

const boxSource = {
	beginDrag(props) {
		return {
			name: props.name,
		}
	},
}

@DragSource(props => props.type, boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))
/** This component represent a column of a dataset*/
export default class Column extends Component {
	static propTypes = {
		/** source where this item can be dropped */
		connectDragSource: PropTypes.func.isRequired,
		/** flag to determine if the item is being dragged*/
		isDragging: PropTypes.bool.isRequired,
		/** name */
		name: PropTypes.string.isRequired,
		/** type of item to be dragged*/
		type: PropTypes.string.isRequired,
		/** flag to determine if it is being dragged*/
		isDropped: PropTypes.bool.isRequired,
	}

	static defaultProps={
		isDragging: true,
		name: 'Column',
		type: ItemTypes.COLUMN,
		isDropped: true
	}

	render() {
		const { name, isDropped, isDragging, connectDragSource } = this.props
		const opacity = isDragging ? 0.4 : 1

		return connectDragSource(
			<div style={{ ...style, opacity }}>
				{isDropped ? <s>{name}</s> : name}
			</div>,
		)
	}
}
