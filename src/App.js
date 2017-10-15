import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group'


class Circleone extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 0,
      anglePerClick: 30,
    }
  }  
  rotateCircle() {
    const { currentAngle, anglePerClick } = this.state;
    this.setState({ 
      currentAngle: currentAngle + anglePerClick 
    })
  }
  render() {
    const circleStyle = {
      transform: `rotateZ(${this.state.currentAngle}deg)`
    }  
    return (
        <div className="App-logo biggest-logo" alt="logo" style={circleStyle}
            onClick={this.rotateCircle.bind(this)}>             
            <div className="little-circle one ein"></div>
            <div className="little-circle two zwei"></div>
            <div className="little-circle three drei"></div>
            <div className="little-circle four fier"></div>
        </div>
    );
  }
}

class Circlethree extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 0,
      anglePerClick: 30,
    }
  }  
  rotateCircle() {
    const { currentAngle, anglePerClick } = this.state;
    this.setState({ 
      currentAngle: currentAngle + anglePerClick 
    })
  }
  render() {
    const circleStyle = {
      transform: `rotateZ(${this.state.currentAngle}deg)`
    }  
    return (
          <div className="App-logo big-logo" alt="logo" style={circleStyle}
          onClick={this.rotateCircle.bind(this)} >
                        
            <div className="little-circle one un"></div>
            <div className="little-circle two dos"></div>
            <div className="little-circle three tres"></div>
            <div className="little-circle four quatro"></div>
        
          </div>
    );
  }
}

class Circletwo extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 0,
      anglePerClick: 30,
    }
  }  
  rotateCircle() {
    const { currentAngle, anglePerClick } = this.state;
    this.setState({ 
      currentAngle: currentAngle + anglePerClick 
    })
  }
  render() {
    const circleStyle = {
      transform: `rotateZ(${this.state.currentAngle}deg)`
    }  
    return (
          <div className="App-logo" alt="logo" style={circleStyle}
          onClick={this.rotateCircle.bind(this)} >
            <div className="little-circle one"></div>
            <div className="little-circle two"></div>
            <div className="little-circle three"></div>
            <div className="little-circle four"></div>
          </div>
    );
  }
}

class App extends Component {  
      
  render() {  
    return (
      <div className="App">
        
        <header className="App-header">
     
            <Circlethree/>
            <Circleone/>
            <Circletwo/>
            
        </header>
               
      </div>
    );
  }
}

export default App;
