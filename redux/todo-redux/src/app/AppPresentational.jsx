import React from 'react';
import AddNumber from '../components/addNumber';
import DisplayNumber from '../components/displayNumber';

const AppPresentational = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <AddNumber />
        <DisplayNumber />
      </div>
    </>
  );
};

export default AppPresentational;
