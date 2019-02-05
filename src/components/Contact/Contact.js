import React from 'react';

const Contact =()=>{
  return(
    <div>
    <main className="pa4 black-80">
<form className="measure center animated fadeInRight" action="https://formspree.io/aslihan.saylik@gmail.com"
      method="POST">
  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="f4 fw6 ph0 mh0">Contact Me</legend>
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" type="email" name="email-address"  id="email-address"/>
    </div>
    <div className='mt2'>
    <label htmlFor="comment" className="f6 b db mb2">Message</label>
    <textarea id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
  </div>
  </fieldset>
  <div className="">
    <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit">Send</button>
  </div>
</form>
</main>

<footer className="pv4 ph3 center">
  <a className="link near-black hover-silver dib mh3 tc" href="https://github.com/ashleyasli" title="GitHub">
    <svg className="dib h2 w2" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
    <span className="f6 db">GitHub</span>
  </a>
  <a className="link hover-silver near-black dib mh3 tc" href="https://www.linkedin.com/in/aslihan-saylik-b5a477b4/" title="LinkedIn">
    <svg className="dib h2 w2" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero"/></svg>
    <span className="f6 db">LinkedIn</span>
  </a>
  </footer>

    </div>
  );
}

export default Contact;