import React from 'react';
import emailjs from 'emailjs-com';
import { Alert } from 'react-bootstrap';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    emailjs.sendForm('contact_service', 'contact_form', e.target, "user_AZg4TNVXk6KjBxsSRcaGM")
  };

  render() {
    return (
      <div className="App-main">
        <h2 className='title'>Send us a message!</h2>
        <p className='mainP'>
        <form className="form-main" id="contact-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="inputName">Your name</label>
            <input type="text" className="form-control" id="inputName" name="from_name"/>
          </div>
          <div className="form-group">
            <label for="inputEmail">Email address</label>
            <input type="email" className="form-control" id="inputEmail" name="reply_to"/>
          </div>
          <div className="form-group">
            <label for="inputMessage">Message</label>
            <textarea className="form-control message" id="inputMessage" aria-label="Send-a-message" name="message"></textarea>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="emailListCheck" name="checked"/>
            <label className="form-check-label" for="emailListCheck">Sign up for our mailing list</label>
          </div>
          <button type="submit" className="btn btn-primary" id="sendMessage">Submit</button>
        </form>
        </p>
      </div>
    );
  }
}

export default Contact;