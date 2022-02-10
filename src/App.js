import logo from './assets/logo3.svg';
import './App.css';
import React, { Component } from 'react'
import Calendar from './components/Calendar';


export default class App extends Component {
  state = {
    name: 'fadyehabamer',
  }


  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      name: this.refs.name.value,
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

        <form onSubmit={this.handleSubmit} className="inputs">
          <input autocomplete="off" id="name" type="text" ref="name" placeholder='Enter Github UserName' />
          <input type="submit" value="Search" />
        </form>

        <h3>
          @ {this.state.name} Github Contributions
        </h3>
        <Calendar username={this.state.name} />

        <h4>
          Made With Passion By <a href="https://www.github.com/fadyehabamer">
            Fady Ehab Amer
          </a>
        </h4>
      </div>
    );
  }
}
