import  React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

class Add extends Component {

    state = {
        dod_film: {
            title: "",
            image: "",
            content: ""
        },
        errors: {}
    };

    handleChangeRoute = () => {
        this.props.history.push('/');
        window.location.reload();
    };

    validate = () => {
        const errors = {};

        const {dod_film} = this.state;
        if (dod_film.title.trim() === '') {
            errors.title = 'Tytuł jest wymagany!';
        }
        if (dod_film.image.trim() === '') {
            errors.image = 'Zdjęcie jest wymagane!';
        }
        if (dod_film.content.trim() === '') {
            errors.content = 'Opis jest wymagany!';
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
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: this.state.dod_film.title,
                image: this.state.dod_film.image,
                content: this.state.dod_film.content
            }
        }).then((response) => {
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.content = 'Opis';
            this.setState({errors: errors || {}});
            console.log(error);
        });
    };

    handleChange = (event) => {
        const dod_film = {...this.state.dod_film};
        dod_film[event.currentTarget.name] = event.currentTarget.value;
        this.setState({dod_film});
    };

    render() {
        return ( <center> <div style={{ width: "20%",
                                            float: "center",
                                            marginTop: "8%",
                                            }}>
                <h1>Dodaj film</h1> <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Tytuł</label>
                        <input value={this.state.dod_film.title}
                               name="title"
                               onChange={this.handleChange}
                               type="tytul"
                               className="form-control"
                               id="title"
                               aria-describedby="titleHelp"
                               placeholder="Tytuł"/>
                        {this.state.errors.title &&
                        <div className="alert alert-danger">{this.state.errors.title}</div>}
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="image">Zdjęcie</label>
                        <input value={this.state.dod_film.image}
                               name="image"
                               onChange={this.handleChange}
                               type="link"
                               className="form-control"
                               id="image"
                               aria-describedby="imageHelp"
                               placeholder="URL zdjęcia"/>
                        {this.state.errors.image &&
                        <div className="alert alert-danger">{this.state.errors.image}</div>}
                    </div><br/>
                    <div className="form-group">
                        <label htmlFor="content">Opis filmu</label>
                        <input value={this.state.dod_film.content}
                               name="content"
                               onChange={this.handleChange}
                               type="content"
                               className="form-control"
                               id="content"
                               placeholder="Opis filmu"/>
                        {this.state.errors.content &&
                        <div className="alert alert-danger">{this.state.errors.content}</div>}
                    </div> <br/>
                    <button type="submit" className="btn btn-primary">Dodaj film</button>
                </form>

            </div> </center>
        );
    }
}

export default Add;
