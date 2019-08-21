import React, { useState, Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
  state = {
    title: "live",
    iterate: 0
  }
  constructor () {
    super()
    const titleOptions = ['live', 'love', 'aspire', 'strive', 'dream', 'seek', ]
    
    const changeTitle = () => {
      let { title, iterate } = this.state
      let newState = []
      if(iterate < titleOptions.length){
          newState = {
            title: titleOptions[iterate++], 
            iterate: iterate++
          }
        } else {
          newState = {
            title: titleOptions[0], 
            iterate: 1
          }
        }
        this.setState(newState)
    }
    let timer = setInterval(changeTitle, 2000);
  }
  render() {
    return(
      <div className="App">
        <div className="App-header">
          <CSSTransition timeout={500} className="Header-content" appear>
            <div>
              <h1>Howdy! I'm <font className="Header-name">David Richardson,</font></h1>
              <h2>and I {this.state.title} to create!</h2>
              <p>Code is my best tool, check out some of my work.</p>
            </div>
          </CSSTransition>
        </div>
      </div>
    )
  }
}


export default App;
