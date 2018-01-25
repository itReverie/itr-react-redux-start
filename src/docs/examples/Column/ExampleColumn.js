import React, { Component } from 'react';
import Column from 'components-app/Column/Column';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
//export default function ExampleColumn(){
/** Custom Column just do see teh effects of dragging */
export default class ExampleColumn extends Component{
  render() {
    return (
            <Column name={'column'}
                   type={'column'}
                   isDropped={true}
                   key={1}/>
            )}
}
