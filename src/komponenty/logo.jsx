import  React, { Component } from 'react';
import Logo from '../zdjecia/logo.png';
import { Link } from "react-router-dom";

class Logo1 extends Component {
    state = {};

    render(){
        return <Link to="/"><img src={Logo} /></Link>


    }
}

export default Logo1;