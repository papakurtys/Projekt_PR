import  React, { Component } from 'react';
import Film1 from '../zdjecia/film1.png';
import Opis_filmu from './opis_filmu';
import Tytul from './tytul';

class Filmy extends Component {
    state = {};

    render(){
        return <div style={{float: "left", marginTop: "6%", marginRight: "1%", justifyContent: "center" }}>
                 <div class="card" style={{width: "18rem", marginTop: "6%" }}>
                   <img src= {Film1} class="card-img-top" alt="Film1" />
                   <div class="card-body">
                     <h5 class="card-title"><Tytul /></h5>
                     <p class="card-text"><Opis_filmu /></p>
                     <a href="#" class="btn btn-primary">Więcej...</a>
                   </div>
                 </div>
               </div>
    }
}

export default Filmy;