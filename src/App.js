import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames';
import './App.css'

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
    this.rotateCircle = this.rotateCircle.bind(this);
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
          <div className="App-logo small-logo" 
               alt="logo" 
               style={circleStyle}
               onClick={this.rotateCircle}>
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
    this.rotateCircle = this.rotateCircle.bind(this);
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
          <div className="App-logo big-logo" 
          style={circleStyle}
          onClick={this.rotateCircle} >
                        
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
    this.rotateCircle = this.rotateCircle.bind(this);
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
            onClick={this.rotateCircle}>             
            <div className="little-circle ein react"></div>
            <div className="little-circle zwei angular"></div>
            <div className="little-circle drei vue"></div>
        </div>
    );
  }
}

class ClawCircle extends Component {      
  render() {
    return (
          <div 
          className={classnames('App-logo','claw-circle', this.props.styleName)} 
          alt="logo" >
          </div>
    );
  }
}


class App extends Component {      
  


  render() {   

    const imagesAvailable = ['angular', 'vue', 'react']

    const imageChoosen = imagesAvailable[2]
    return (
      
      <div className="App">
        
        <header className="App-header">
            
            <Circleone />
            <Circletwo />
            <Circlethree />
            <ClawCircle styleName={imageChoosen}/>
            <HalfCircle/>
              
        </header>      
      </div>


            
      
    );
  }
}

export default App;
