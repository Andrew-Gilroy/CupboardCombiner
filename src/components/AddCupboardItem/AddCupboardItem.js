

import React from 'react';
//import 'SOMETHING HERE.css';
let AddCupboardItem = props => (
  
  <div className="AddCupboardItem">
            <form onSubmit={props.onSubmit}>
            <input value={props.value} onChange={props.onChange} placeholder="What's in the cupboard?" id="AddCupboardItem-input"/>
            <button id="cupboardSubmitBtn">Submit</button>
            </form>
        </div>
  
)
export default AddCupboardItem;
/*
 <div className="AddCupboardItem">
            <form onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.inputOnChange} placeholder="What's in the cupboard?" id="AddCupboardItem-input"/>
            <button id="cupboardSubmitBtn">Submit</button>
            </form>
        </div>
  
*/




/*
render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
  export default AddCupboardItem;
*/
