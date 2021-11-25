import  React, { Component } from 'react';

class Stopka extends Component {
    state = {};

    render(){
        return <div>
                 <div style={{width: "100%",
                 height: "3%",
                 float: "left",
                 position: "fixed",
                 bottom: 0,
                 right: 0,
                 textAlign: "center",
                 backgroundImage: "linear-gradient(to right, silver, white)"}}>

                    <p><b>© Konrad Kurtyka - Programowanie Reaktywne II </b></p>

                 </div>

               </div>
    }
}

export default Stopka;