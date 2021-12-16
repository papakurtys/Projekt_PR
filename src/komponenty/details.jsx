import  React, { Component } from 'react';
import Film1 from '../zdjecia/film1.png';
import Opis_filmu from './opis_filmu';
import Tytul from './tytul';
import { Link } from "react-router-dom";

class Details extends Component {
    state = {};

    render(){
        return <div style={{float: "left", marginTop: "6%", marginLeft: "1%", justifyContent: "center" }}>

                   <div style={{display: "flex", flexDirection: "row" }}> <img src= {Film1} class="card-img-top" alt="Film1" style={{height: "60%", width: "20%"}} ></img>
                      <div><h5 class="card-title"><Tytul /></h5>


                     <p class="card-text">"Escape Room: Najlepsi z najlepszych" to druga część thrillera "Escape Room" z 2019 roku. Opowiadał o grupie nieznanych sobie osób, które trafiły do escape roomu stanowiącego dla nich śmiertelne zagrożenie.</p><br />
                     <p> Pełny opis
                      W nowym filmie grupa kilku osób zostanie zamknięta w Escape Roomie i podejmie próbę wydostania się z niego za wszelką cenę. Reżyserem filmu ponownie jest Adam Robitel. W rolach głównych zobaczymy : Taylora Russella ("Zagubieni w kosmosie") oraz Logana Millera ("Twój Simon").</p>
                   </div>
                   </div>
                   </div>


    }
}

export default Details;