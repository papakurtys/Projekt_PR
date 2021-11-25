import  React, { Component } from 'react';
import Logo1 from './logo';
import Zaloguj from './zaloguj';
import Wyszukaj from './wyszukaj';

class Naglowek extends Component {
    state = {};

    render(){
        return <div style={{width: "100%",
               height: "10%",
               position: "fixed",
               top: 0,
               right: 0,
               zIndex: 1,
               backgroundImage: "linear-gradient(to right, silver, white)" }}>

                 <div style={{width: "56px",
                 height: "56px",
                 float: "left",
                 position: "relative",
                 top: 0,
                 left: 0,
                 borderStyle: "inset",
                 textAlign: "center",

                 marginTop: "10px",
                 marginLeft: "10px",
                  }}>

                    <Logo1 />

                 </div>
                 <div style={{width: "40%",
                 height: "7%",
                 float: "left",
                 position: "relative",
                 top: 0,
                 left: 0,
                 textAlign: "left",
                 marginTop: "15px",
                 marginLeft: "25px",
                 }}>

                     <Wyszukaj />

                 </div>
                <Zaloguj />
               </div>
    }
}

export default Naglowek;