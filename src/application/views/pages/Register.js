import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { connect } from 'react-redux'
import { RegisterActions } from '../../actions'
import Header from '../common/Header'
import Footer from '../common/Footer'

class RegisterPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            email : '',
            password : '',
            confirm_password : ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var field = event.target.attributes.name.nodeValue; 
        this.setState({ [field] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        document.getElementById("data").innerHTML = JSON.stringify(this.state);
    }

    render() { 
        return (
            <div>
                <Header />
                <Helmet>
                    <title>Registration</title>
                </Helmet>
                
                <div className="container">
                    <p id="data"></p>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    Register
                                </div>
                                <div className="card-body">
                                    <div className="col-md-8">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="username">Username</label>
                                                <input type="text" className="form-control" name="username" placeholder="Enter username" 
                                                        value={this.state.username} onChange={this.handleChange} required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email address</label>
                                                <input type="email" className="form-control" name="email" placeholder="Enter email"
                                                        value={this.state.email} onChange={this.handleChange} required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control" name="password" placeholder="Enter Password"
                                                        value={this.state.password} onChange={this.handleChange} required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="confirm_password">Confirm Password</label>
                                                <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password"
                                                        value={this.state.confirm_password} onChange={this.handleChange} required/>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(null)(RegisterPage)