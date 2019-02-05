import React from 'react';
import aslihan from './aslihan.jpg';
import Tilt from 'react-tilt';


const About =()=>{
  return(
    <div className= "mw6 shadow-5 center black br3 pa4 pa4-ns mv3 ba b--black-10">
    <article >
   <div className="tc">
   <Tilt className="Tilt center" options={{ max : 85 }} style={{ height: 125, width: 125 }} >
   <div className="Tilt-inner center"><img alt='pic'src={aslihan} className="br-100 h4 w4 dib" /> </div>
   </Tilt>
   <h1 className="f4">{'Aslihan(Ashley) Saylik'}</h1>
    <hr className="mw3 bb bw1 b--black-10" />
  </div>
  <p className="lh-copy measure center f6 black-70 animated fadeInRight">
    {'Computer and Electrical Engineer with professional experience. Self-taught full stack web developer with background in software test. Passionate about learning new technologies/languages and using my abilities to solve challenging engineering problems. '}
  </p>
  <div className="ph3 center">
  {/*<a class="f6 link dim br-pill ph3 pv2 mb2 dib white bg-navy" >Download Resume</a>*/}
</div>
</article>
    </div>
  );
}

export default About;