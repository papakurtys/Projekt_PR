import  React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class SignIn extends Component {
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
            <label for="Haslo" class="form-label"><b>Hasło</b></label>
            <input type="haslo" class="form-control" id="Haslo" />
          </div>
          <button type="submit" class="btn btn-primary">Zarejestruj</button>
        </form>

               </div> </center>
    }
}

export default SignIn;