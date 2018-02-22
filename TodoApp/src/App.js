import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import {List } from './List.js';
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      item : '',
      itemList: [],

    }

   }

 onChange = (event) => {

  this.setState({

    item: event.target.value

  });

 }

onSubmit = (event) => {

  event.preventDefault();
 
  this.setState({
    
    item : '',
    itemList:[...this.state.itemList, this.state.item]

  });

}


deleteTask = (event) => {

  event.preventDefault();

  delete this.state.itemList[event.target.value];

  this.setState({

  itemList : this.state.itemList.filter((index) => index !== event.target.value)

  })

  console.log(this.state.itemList);

}

  
  render() {
    
    return (
    <div>
      <Header getImage = {this.getImage}/>
      
    <form className = "App" onSubmit ={this.onSubmit}>
      
      <input value = {this.state.item} onChange = {this.onChange} placeholder ="enter task here"/>

      <button>Submit</button>

      </form>

      <List itemList = {this.state.itemList} deleteTask = {this.deleteTask} />
      
    </div>

    );
  
  }

}



export default App;
