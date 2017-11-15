import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
import './App.css';
import Nav from './../../components/Nav'
import List from './../../components/List'


const data = [
  {
    content: 'this. is my three article',
    title: 'test article title 3',
    time: '1994/1/5'
  },
  {
    content: 'this is my first article',
    title: 'test article title',
    time: '1992/2/4'
  },
  {
    content: 'this is my second article',
    title: 'test article title 2',
    time: '1993/2/2'
  }
]

class App extends Component {
  render() {
    const ListItem = data.map( (item) => {
        return <List data={item} />
    }) 
    return (
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome My Blog</h1>
        </header>
        <main>
          { ListItem }
        </main>
      </div>);
  } }

export default App; 