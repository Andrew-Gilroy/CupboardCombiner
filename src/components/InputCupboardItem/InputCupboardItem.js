import React from 'react';
import '../InputCupboardItem/InputCupboardItem.css';

function InputCupboardItem({value, onChange, onSubmit}) {
  
  return <div className="AddCupboardItem">
            <form onSubmit={onSubmit}>
            <input value={value} onChange={onChange} placeholder="What's in the cupboard?" id="AddCupboardItem-input" required/>
            <button id="cupboardSubmitBtn">SUBMIT</button>
            </form>
        </div>
};

export default InputCupboardItem;


//{value, onChange, onSubmit} is how i pass in props with hooks!!!
//function IngredientsNumCounterHOOKS({finalResultsHandler}) {
