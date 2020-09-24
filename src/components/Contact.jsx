import React from 'react';
import emailjs from 'emailjs-com';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '', name: '', email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ message: document.getElementById('inputMessage'), from_name: document.getElementById('inputName'), reply_to: document.getElementById('inputEmail') })
    emailjs.sendForm('contact_service', 'contact_form', document.getElementById('contact-form'), "user_AZg4TNVXk6KjBxsSRcaGM")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
  };

  render() {
    return (
      <div className="App-main">
        <h2 className='title'>Send us a message!</h2>
        <p className='mainP'>
        <form className="form-main" id="contact-form">
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
          <button type="submit" className="btn btn-primary" id="sendMessage" onClick={this.handleSubmit}>Submit</button>
        </form>
        </p>
      </div>
    );
  }
}

export default Contact;