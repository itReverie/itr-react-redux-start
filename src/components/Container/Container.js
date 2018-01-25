import React, { Component } from 'react';
import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import AxisArea from '../AxisArea/AxisArea';
import Column from '../Column/Column';
import ItemTypes from '../ItemTypes';

@DragDropContext(HTML5Backend)
export default class Container extends Component {
	constructor(props) {
		super(props)
		this.state = {
			axisArea: [
				{ accepts: [ItemTypes.COLUMN], lastDroppedItem: null }
			],
			columns: [
				{ name: 'ColumnA', type: ItemTypes.COLUMN }
			],
			droppedColumnNames: [],
		}
	}

	isDropped(columnName) {
		return this.state.droppedColumnNames.indexOf(columnName) > -1
	}

	render() {
		const { columns, axisArea } = this.state

		return (
			<div>
				<div style={{ overflow: 'hidden', clear: 'both' }}>
					{axisArea.map(({ accepts, lastDroppedItem }, index) => (
						<AxisArea
							accepts={accepts}
							lastDroppedItem={lastDroppedItem}
							onDrop={item => this.handleDrop(index, item)}
							key={index}
						/>
					))}
				</div>

				<div style={{ overflow: 'hidden', clear: 'both' }}>
					{columns.map(({ name, type }, index) => (
						<Column
							name={name}
							type={type}
							isDropped={this.isDropped(name)}
							key={index}
						/>
					))}
				</div>
			</div>
		)
	}

	handleDrop(index, item) {
		const { name } = item
		const droppedColumnNames = name ? { $push: [name] } : {}

		this.setState(
			update(this.state, {
				axisArea: {
					[index]: {
						lastDroppedItem: {
							$set: item,
						},
					},
				},
				droppedColumnNames,
			}),
		)
	}
}

//export default DragDropContext(HTML5Backend)(Container);
