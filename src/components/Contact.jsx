import React from 'react';

function Contact() {
  return (
    <div className="App-main">
      <h2 className='title'>Contact Us</h2>
      <p className='mainP'>
      <form className="form-main">
        <div className="form-group">
          <label for="inputName">Your name</label>
          <input type="text" className="form-control" id="inputName"/>
        </div>
        <div className="form-group">
          <label for="inputEmail">Email address</label>
          <input type="email" className="form-control" id="inputEmail"/>
        </div>
        <div className="form-group">
          <label for="inputMessage">Message</label>
          <textarea className="form-control message" aria-label="Send-a-message"></textarea>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="eListCheck"/>
          <label className="form-check-label" for="eListCheck">Sign up for our mailing list</label>
        </div>
        <button type="submit" className="btn btn-primary" id="sendMessage">Submit</button>
      </form>
      </p>
    </div>
  );
}

export default Contact;