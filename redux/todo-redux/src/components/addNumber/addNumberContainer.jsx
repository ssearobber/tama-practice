import React, { useState } from 'react';
import AddNumberPresentational from './AddNumberPresentational';

const AddNumberContainer = () => {
  const [inputData, setInputData] = useState(0);
  const handleOnchange = () => {};
  const handleAddOnclick = () => {};
  return (
    <div>
      <AddNumberPresentational
        handleOnchange={handleOnchange}
        handleAddOnclick={handleAddOnclick}
      />
    </div>
  );
};

export default AddNumberContainer;
