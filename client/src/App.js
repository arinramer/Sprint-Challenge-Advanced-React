import React from 'react';
import axios from 'axios';
import './App.css';
import Cardlist from './Cardlist';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({people: res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
        <Cardlist people={this.state.people}/>
      </div>
    );
  } 
}

export default App;
