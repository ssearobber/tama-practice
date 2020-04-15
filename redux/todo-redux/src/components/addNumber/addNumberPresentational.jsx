import React from 'react';

const AddNumberPresentational = ({ handleOnchange, handleAddOnclick }) => {
  return (
    <div>
      <form>
        <input type="text" onChange={handleOnchange} />
        <button onClick={handleAddOnclick}>add</button>
      </form>
    </div>
  );
};

export default AddNumberPresentational;
