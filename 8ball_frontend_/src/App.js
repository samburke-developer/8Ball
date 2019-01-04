import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.shake = this.shake.bind(this);  
    this.state = {
      ball_response: ""
    };
  }

  //fetch function that queries backend app and sets ball_response state to be equal to the response
  shake()
  {
  	fetch('http://localhost:3000/shake')
    .then(response => response.json())
    .then(data => this.setState({ ball_response: data.ball_response }));
  }

  render() {
    return (
      <div className="App">
        <div className="top" style={{
        position: 'absolute', left: '50%', top: '10%',
        transform: 'translate(-50%, -50%)'
        }}>
          <input type="text" id="question" placeholder="Ask me anything..."></input>
          <br/><br/>
          <button onClick={this.shake}>Shake</button>
        </div>
        <div className="ball"> 
          <div className="eight">
            <h1>8</h1>
          </div> 
          <p className="response" id="response">{this.state.ball_response}</p>
        </div>
        <div className="signature">
          <a  href="mailto:sam.fitz.burke@gmail.com">Created By: Sam Burke</a>
        </div>
      </div>
    );
  }
}

export default App;
