import React from 'react';
import Row from './Row';

const Grid = (props) => {
  const grid = props.active.map((active, index) => {
    return (
      <Row key={index} active={active} index={index} update={props.update} />
    );
  });
  return <div className='grid'>{grid}</div>;
};

export default Grid;
