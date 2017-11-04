import React, { Component } from 'react';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';

class HalfCircle extends Component {      
  render() {
    return (
          <div className="App-logo half-circle" alt="logo">
          </div>
    );
  }
}



class Circleone extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 120,
      anglePerClick: 120,
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
          <div className="App-logo small-logo" alt="logo" style={circleStyle}
          onClick={this.rotateCircle.bind(this)} >
            <div className="little-circle one react"></div>
            <div className="little-circle two angular"></div>
            <div className="little-circle three vue"></div>
          </div>
    );
  }
}

class Circletwo extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 120,
      anglePerClick: 120,
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
          <div className="App-logo big-logo" style={circleStyle}
          onClick={this.rotateCircle.bind(this)} >
                        
            <div className="little-circle un react"></div>
            <div className="little-circle dos angular"></div>
            <div className="little-circle tres vue"></div>
        
          </div>
    );
  }
}

class Circlethree extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 120,
      anglePerClick: 120,
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
      transform: `rotateZ(${this.state.currentAngle}deg)`,
      
    }  
    return (
        <div className="App-logo biggest-logo" alt="logo" style={circleStyle}
            onClick={this.rotateCircle.bind(this)}>             
            <div className="little-circle ein react"></div>
            <div className="little-circle zwei angular"></div>
            <div className="little-circle drei vue"></div>
        </div>
    );
  }
}

class ClawCircle extends Component {      
  constructor(props){
    super(props)
    this.state = {
      currentAngle: 45,
      anglePerClick: 360,
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
          <div className="App-logo claw-circle" alt="logo" style={circleStyle}
          onClick={this.rotateCircle.bind(this)} >
          </div>
    );
  }
}


class App extends Component {  
      
  render() {  
    return (
      <div className="App">
        
        <header className="App-header">
            
            <Circleone/>
            <Circletwo/>
            <Circlethree/>    
            <ClawCircle/>
            <HalfCircle/>
            
        </header>
               
      </div>
    );
  }
}

export default App;
