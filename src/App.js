import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

const particleOptions={
  particles: {
    number: {
      value: 120,
      density:{
        enable: true,
        value_area: 1500
      }
    },
    color: {
     value: '#ffffff'

   },
   shape:{
      type: 'circle'
    },
    opacity:{
      value: 9,
      random: true,
      anim:{
        enable: true,
        speed: 24
      }
    },
   line_linked:{
     enable_auto: true,
     color: '#ffffff'
   }
  },
  interactivity:{
    events:{
      onhover:{
        enable: true,
        mode: 'repulse'
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      route: 'home'
    }
  }

  onRouteChange = (route)=>{
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions}/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'home'
        ?<About />
        :(
          this.state.route === 'portfolio'
        ? <Portfolio onRouteChange={this.onRouteChange}/>
        : <Contact/>
         )
        }
        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
         <small className="f6 db tc">© 2019<b className="ttu"> Aslihan(Ashley) Saylik </b> All Rights Reserved</small>
         </footer>
      </div>
    );
  }
}

export default App;
