import React from 'react';

const Row = (props) => {
  const row = props.active.map((display, index) => {
    let color;
    display ? (color = 'black') : (color = '#f5f6fa');
    return (
      <div
        className='pixel'
        key={index}
        style={{
          backgroundColor: color,
          height: '20px',
          width: '20px',
          margin: '2px',
        }}
        onClick={() => props.update(index, props.index)}
      />
    );
  });
  return (
    <div className='row' style={{ display: 'flex' }}>
      {row}
    </div>
  );
};

export default Row;
