import React from 'react';
import '../InputCupboardItem/InputCupboardItem.css';

function InputCupboardItem({value, onChange, onSubmit}) {
  
  return <div className="AddCupboardItem">
            <form onSubmit={onSubmit}>
            <input value={value} onChange={onChange} placeholder="What is inside your cupboard?" id="AddCupboardItem-input" required maxLength="19"/>
            <button id="cupboardSubmitBtn">SUBMIT</button>
            </form>
        </div>
};

export default InputCupboardItem;