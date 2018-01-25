import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

const style = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

const AxisAreaTarget = {
	drop(props, monitor) {
		props.onDrop(monitor.getItem())
	},
}



@DropTarget(props => props.accepts, AxisAreaTarget,
	(connect, monitor) => ({
												connectDropTarget: connect.dropTarget(),
												isOver: monitor.isOver(),
												canDrop: monitor.canDrop(),
}))
export default class AxisArea extends Component {
	static propTypes = {
		/** Connection to the drop target */
		connectDropTarget: PropTypes.func.isRequired,
		/** Detects if there is an item over this area */
		isOver: PropTypes.bool.isRequired,
		/** Detects if the item over this area can be dropped here*/
		canDrop: PropTypes.bool.isRequired,
		/** Detects the types of object valid to drop in this area*/
		accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
		/** Detects which was the last item dropped*/
		lastDroppedItem: PropTypes.object,
		/** Action to release when a item is dropped*/
		onDrop: PropTypes.func.isRequired,
	}

	render() {
		const {
			accepts,
			isOver,
			canDrop,
			connectDropTarget,
			lastDroppedItem,
		} = this.props
		const isActive = isOver && canDrop

		let backgroundColor = '#cc3399'
		if (isActive) {
			backgroundColor = '#ffccff'
		} else if (canDrop) {
			backgroundColor = 'pink'
		}

		return connectDropTarget(
			<div style={{ ...style, backgroundColor }}>
				{isActive
					? 'Release to drop'
					: `This AxisArea accepts a ${accepts.join(', ')}`}

				{lastDroppedItem && (
					<p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
				)}
			</div>,
		)
	}
}
