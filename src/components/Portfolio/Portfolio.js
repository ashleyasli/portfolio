import React from 'react';
import rf from './rf.png';
import bg from './bg.png';
import lw from './lw.png';
import fr from './fr.png';
import rgb from './rgb.png';

const Portfolio =()=>{
  return(
    <div>
    <article className='center'>
<h2 className="f3 fw4 pa3 mv0">Portfolio</h2>

 <div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://github.com/ashleyasli/robotFriends" className="db link dim tc animated fadeInDown">
     <img src={rf} alt="dr-screenshot" className="w-100 db outline black-10"/>
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100">{'Robo Friends'}</dd>
       <dt className="clip">Intro</dt>
       <dd className="ml0 gray truncate w-100">{'A React/Redux based application with API'}</dd>
     </dl>
   </a>
 </div>



 <div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://github.com/ashleyasli/Face-Recognition-App-" className="db link dim tc animated fadeInUp">
     <img src={fr} alt="sb-screenshop" className="w-100 db outline black-10"/>
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100 ttu">{'Robofriends'}</dd>
       <dt className="clip">Intro</dt>
       <dd className="ml0 gray truncate w-100">{'Use a RESTful API to detect face in given images'}</dd>
     </dl>
   </a>
 </div> 
{/*
 <div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://ashleyasli.github.io/backgroundGenerator/" className="db link dim tc animated fadeInDown">
     <img src={bg} alt="bg-screenshop" className="w-100 db outline black-10"/>
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100 ttu">Background Generator</dd>
       <dt className="clip">Artist</dt>
       <dd className="ml0 gray truncate w-100">{'a JavaScript app to help web developer generate background'}</dd>
     </dl>
   </a>
 </div>*/}

 <div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://ashleyasli.github.io/guessingRGBColorGame/" className="db link dim tc animated fadeInUp">
     <img src={rgb} alt="sb-screenshop" className="w-100 db outline black-10"/>
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100 ttu">{'Robofriends'}</dd>
       <dt className="clip">Intro</dt>
       <dd className="ml0 gray truncate w-100">{'A React/Redux based application with API'}</dd>
     </dl>
   </a>
 </div>

<div className="fl w-100 w-50-m w-third-l pa2">
   <a href="https://ashleyasli.github.io/Landing-Startup-Page/" className="db link dim tc animated fadeInUp">
     <img src={lw} alt="lw-screenshop" className="w-100 db outline black-10" />
     <dl className="mt2 f6 lh-copy">
       <dt className="clip">Title</dt>
       <dd className="ml0 black truncate w-100 ttu">Landing Website</dd>
       <dt className="clip">Intro</dt>
       <dd className="ml0 gray truncate w-100">{'A responsive landing site for small business'}</dd>
     </dl>
   </a>
 </div>




</article>
    </div>
  );
}

export default Portfolio;