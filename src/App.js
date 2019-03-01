import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: true 
      }

      this.handleClick = this.handleClick.bind(this);

    }

    

    handleClick(){
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    

  render() {
    return (
      <div className="App">

        <div className='row-md-4'>
          <button type="button" className="btn btn-danger mt-4 mb-4">Operaciones<img src={logo} className="App-logo" alt="logo" /></button>
        </div>  

        <div>
          <div className='row-md-4'>
            <button type="button" className="btn btn-dark mb-4"><i className="fas fa-calculator "></i></button>
          </div> 
  
          <div id='cajas' className='d-flex justify-content-center row-md-4'>
            
            <button onClick={this.handleClick} type="button" className="btn btn-primary mx-2">
              <i className="fas fa-plus"></i>
              {this.state.isToggleOn ? '' : ' ON'}
            </button>
            
            <button type="button" className="btn btn-success mx-2">
              <i className="fas fa-minus"></i>
            </button>
            
            <button type="button" className="btn btn-warning mx-2 text-white">
              <i className="fas fa-times"></i>
            </button>
            
            <button type="button" className="btn btn-info mx-2">
              <i className="fas fa-divide"></i>
            </button> 
          
          </div>
    

          <div>
            <input onChange={this.num1} className='text-center mt-4 mr-2' type='text' name='num 1' placeholder='num 1'>
              {this.setState}
            </input>

            <input className='text-center' type='text' name='num 2' placeholder='num 2'>
            
            </input>
          </div>
  
            <div className='input-group d-flex justify-content-center row-md-4'>
              <button type="button" className="btn btn-outline-danger mt-4 md-md-2"><i className="fas fa-equals"></i></button>
              <input id="spTotal" type="text" className="mt-4 ml-2 text-center" placeholder="Resultado" ></input>
            </div>
        </div>
       
      </div>
    );
  }
}


export default App;



