import  React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

class SignUp extends Component {

    state = {
        account: {
            username: "",
            email: "",
            password: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
      //  this.props.history.push('/');
        window.location.reload();
    };

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Login jest wymagany!';
        }
        if (account.email.trim() === '') {
            errors.email = 'Email jest wymagany!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Hasło jest wymagane!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        console.log(this.state)

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: this.state.account.username,
                email: this.state.account.email,
                password: this.state.account.password
            }
        }).then((response) => {
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Podana nazwa nie istnieje lub wpisano błędne hasło!';
            this.setState({errors: errors || {}});
            console.log(error);
        });
    };

    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };

    render() {
        return ( <center> <div style={{ width: "20%",
                                            float: "center",
                                            marginTop: "8%",
                                            }}>
                <h1>Zarejestruj się</h1> <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Login</label>
                        <input value={this.state.account.username}
                               name="username"
                               onChange={this.handleChange}
                               type="text"
                               className="form-control"
                               id="username"
                               aria-describedby="emailHelp"
                               placeholder="Login"/>
                        {this.state.errors.username &&
                        <div className="alert alert-danger">{this.state.errors.username}</div>}
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="email">Adres Email</label>
                        <input value={this.state.account.email}
                               name="email"
                               onChange={this.handleChange}
                               type="email"
                               className="form-control"
                               id="email"
                               aria-describedby="emailHelp"
                               placeholder="Email"/>
                        {this.state.errors.email &&
                        <div className="alert alert-danger">{this.state.errors.email}</div>}
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="password">Hasło</label>
                        <input value={this.state.account.password}
                               name="password"
                               onChange={this.handleChange}
                               type="password"
                               className="form-control"
                               id="password"
                               placeholder="Hasło"/>
                        {this.state.errors.password &&
                        <div className="alert alert-danger">{this.state.errors.password}</div>}
                    </div> <br/>
                    <button type="submit" className="btn btn-primary">Zarejestruj się</button>
                </form>

            </div> </center>
        );
    }
}

export default SignUp;
