import React from 'react';
import '../AddCupboardItem/AddCupboardItem.css';

const AddCupboardItem = props => (
  
  <div className="AddCupboardItem">
            <form onSubmit={props.onSubmit}>
            <input value={props.value} onChange={props.onChange} placeholder="What's in the cupboard?" id="AddCupboardItem-input" required/>
            <button id="cupboardSubmitBtn">Submit</button>
            </form>
        </div>
  
)
export default AddCupboardItem;
