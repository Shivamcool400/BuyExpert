import React, {Component} from 'react';
import './contactus.css'

class Contactus extends Component{

    state = {
        name: '',
        email: '',
        message: '',
        responseToPost: ''
    }


    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/contactus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
              name: this.state.name,
              email: this.state.email,
              message: this.state.message
            }),
        });
        const body = await response.text();
        
        this.setState({ responseToPost: 'Your message has been sent successfully.' });
      };

    render() {
        return(
        
        <div className="body">
            <hr className="shadow-lg bg-body rounded" />
            {/* <h1 className="head"> Contact Us</h1> */}
            <div className="box box2">
                <div className="left">
                    <form method="POST" action="/contactus" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Get in touch</legend>
                            <p className="text-success text-center">{this.state.responseToPost}</p>
                            <div class="form-group input">
                                <input type="text" class="form-control" name="name" placeholder="Enter name" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} />
                            </div>
                            <div class="form-group input">
                                <input type="email" class="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={e => {this.setState({email: e.target.value})}} />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group input">
                                <textarea class="form-control" rows="5" id="message" placeholder="Enter your message here..." name="message" value={this.state.message} onChange={e => {this.setState({message: e.target.value})}} ></textarea>
                            </div>
                            
                            <button className="btn btnmessage">Submit</button>
                            
                        </fieldset>
                    </form>
                </div>

                

                {/* <div className="right">
                    <div className="emailicon shadow p-3 mb-5 bg-white rounded">
                        <em>For more queries, mail at</em>
                        <i className="fa fa-envelope-o fa-3x"></i>
                        <a href="https://www.gmail.com mailto: shivam.ece.pu@gmail.com" className="email">shivam.ece.pu@gmail.com</a>
                    </div>
                </div> */}
            </div>
            
        </div>
        
        
        
        ); } }
        


export default Contactus ;