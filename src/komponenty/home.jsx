import  React, { Component } from 'react';
import Filmy from './filmy';


class Home extends Component {
    state = {};

    render(){
        return <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", backgroundColor: "#DCDCDC"}}> <Filmy />  <Filmy />  <Filmy />  <Filmy />  <Filmy />  <Filmy /><Filmy /><Filmy /> </div>
    }
}

export default Home;