import  React, { Component } from 'react';
import Film1 from '../zdjecia/film1.png';
import Opis_filmu from './opis_filmu';
import Tytul from './tytul';
import { Link } from "react-router-dom";

class Details extends Component {
  constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            szczegoly: []
        };
    }

    componentDidMount() {
        fetch("https://pr-movies.herokuapp.com/api/movies/" + window.location.pathname.substring(9))
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        szczegoly: result
                    });
                    console.log(result)
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render(){
        return <div style={{float: "left", marginTop: "6%", marginRight: "9%", marginLeft: "1%", justifyContent: "center" }}>

                   <div style={{display: "flex", flexDirection: "row" }}> <img src= {this.state.szczegoly.image} class="card-img-top" alt="Film1" style={{height: "60%", width: "20%"}} ></img>
                      <div style={{marginLeft: "1%"}}>
                      <h5 class="card-title">{this.state.szczegoly.title}</h5>


                     <p class="card-text"> {this.state.szczegoly.content}</p></div>
                   </div>
                   </div>


    }
}

export default Details;