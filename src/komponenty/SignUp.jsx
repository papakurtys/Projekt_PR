import  React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class SignUp extends Component {
    state = {};

    render(){
        return <center> <div style={{ width: "20%",
                            float: "center",
                            marginTop: "8%",
                            }}>

        <form>
          <div class="mb-3">
            <label for="Login" class="form-label"><b>Login</b></label>
            <input type="login" class="form-control" id="Login" aria-describedby="loginHelp" />
          </div>
          <div class="mb-3">
            <label for="Email" class="form-label"><b>Email</b></label>
            <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
             <label for="Nazwa" class="form-label"><b>Nazwa</b></label>
             <input type="nazwa" class="form-control" id="Nazwa" aria-describedby="nazwaHelp" />
          </div>
          <div class="mb-3">
            <label for="Haslo" class="form-label"><b>Hasło</b></label>
            <input type="haslo" class="form-control" id="Haslo" />
            <div id="emailHelp" class="form-text">Twoje dane pozostaną poufne.</div>
          </div>
          <button type="submit" class="btn btn-primary">Zarejestruj</button>
        </form>

               </div> </center>
    }
}

export default SignUp;