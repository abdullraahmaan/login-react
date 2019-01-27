import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {

    constructor(props) {
        super(props);

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = 
        {
            email: 'default@domain.com',
            password: ''
        }
    }

    handleEmail = (e) =>
    {
        if(e.target.value.match("^[a-zA-Z ]*$") != null)
        {
            this.setState({
                email: e.target.value
            });
        }
    }

    handlePassword = (e) =>
    {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`email is ${this.state.email} and password is ${this.state.password} , login successfuly`);
        const login = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('https://reqres.in/api/login', login)
        .then(res => console.log(res.data));
        
        this.setState({
            email: '',
            password: ''
        });
    }
    

    render() {
        return (
            <div className="col-md-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" value={this.email} onChange={this.handleEmail} placeholder="Enter email"  />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={this.password} onChange={this.handlePassword} className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Login</button>
                </form>
            </div>

        );
    }
}

export default Form;