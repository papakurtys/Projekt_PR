import  React, { Component } from 'react';
import { Link } from "react-router-dom";

class Zaloguj extends Component {
    state = {};

    render(){
        return <div>
                 <div style={{width: "6%",
                 height: "7%",
                 float: "right",
                 position: "relative",
                 top: 0,
                 right: 0,
                 textAlign: "center",
                 marginTop: "10px",
                 marginRight: "10px"}}>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                       <Link to="signin"><button type="button" class="btn btn-outline-success">Zaloguj się</button></Link>
                     </div>
                 </div>

               </div>
    }
}

export default Zaloguj;