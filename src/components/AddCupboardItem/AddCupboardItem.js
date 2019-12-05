
/*
import React from 'react';
import 'SOMETHING HERE.css';
let AddCupboardItem = props => (
  <div>
    <form onSubmit={props.onSubmit}>
          <input value={props.term} onChange={props.onChange} placeholder="What's in the cupboard?" id="AddCupboardItem-input"/>
          <button>Submit</button>
    </form>
  </div>
)
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

/*
class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
*/




/*
import React from 'react';

let cupboard = [];

function storeCupboardItems(){
  
  let input = document.getElementById('AddCupboardItem-input');
  cupboard.push(input.value);
  console.log("pushed to array");
  console.log(cupboard);
}

function AddCupboardItem() {
return (
    <div className="AddCupboardItem">
    AddCupboardItem
    <input type="text" placeholder="What's in the cupboard?" className="" id="AddCupboardItem-input"/>
    <button type="submit" onClick={storeCupboardItems}>Submit</button>
    </div>
    );
  
}
export default AddCupboardItem;
*/