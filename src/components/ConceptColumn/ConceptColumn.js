import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Column } from 'react-virtualized';


export default class ConceptColumn extends PureComponent {

  /** Renders a column based on concepts */
  render(){
    return (<Column
      label={this.props.name}
      dataKey={this.props.dataKey}
      width={100}
    />);
  }
}

ConceptColumn.propTypes={
  /** label to display the title of the column*/
  name:PropTypes.string.isRequired,
  /** data to display for that column*/
  dataKey:PropTypes.string.isRequired
};
