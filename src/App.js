import logo from './assets/logo.svg';
import './App.css';
import React, { Component } from 'react'
import Calendar from './components/Calendar';


export default class App extends Component {
  state = {
    name: 'fadyehabamer',
    
  }

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      name: '',
    })
  }




  render() {
    return (
      <div className="App">
        <img className='App-logo' src={logo} alt="" />
        <h1>
          GitHub Contributions Calendar
        </h1>
        <h3>
          A React component to display a GitHub contributions calendar
        </h3>

        <form  className="inputs">
          <input onChange={this.handleInputChange} type="text" value={this.state.name} placeholder='Enter Github UserName' />

        </form>


        <Calendar username={this.state.name} /> :


      </div>
    );
  }
}
