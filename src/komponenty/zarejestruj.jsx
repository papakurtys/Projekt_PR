import  React, { Component } from 'react';
import { Link } from "react-router-dom";


class Zarejestruj extends Component {
    state = {};

    render(){
        return <div>
                 <div style={{width: "8%",
                 height: "7%",
                 float: "right",
                 position: "relative",
                 top: 0,
                 right: 0,
                 textAlign: "center",
                 marginTop: "10px",
                 marginRight: "10px"}}>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                       <Link to="signup"><button type="button" class="btn btn-outline-primary">Zarejestruj się</button></Link>
                     </div>
                 </div>

               </div>
    }
}

export default Zarejestruj;