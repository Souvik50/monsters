import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/search-box.component';

class App extends Component{
  
  state = {ghosts:[], searchfield: ''}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ ghosts: users }) )
  }

  handleChnage = (e) => {
    this.setState({searchfield: e.target.value})
  }

  render(){
    const { ghosts, searchfield } = this.state;
    const filteredGhosts = ghosts.filter(ghost =>
        ghost.name.toLowerCase().includes(searchfield.toLowerCase()))

    return(
      <div className="App">
        <h1>Bengali Ghosts</h1>
        <SearchBox placeholder="Search Ghosts" handleChange={this.handleChnage}/>
        <CardList ghosts={filteredGhosts}/>
    </div>
    );
  }
}

export default App;
