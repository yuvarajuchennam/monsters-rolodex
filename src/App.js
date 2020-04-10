import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  
  state = {
    monsters: [],
    searchField: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <header className="App-header">
          <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
        </header>
      </div>
    );
  }
}

export default App;
