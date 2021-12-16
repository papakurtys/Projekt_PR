import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import index from "./index.js";
import SignUp from "./komponenty/SignUp";


function App() {
  return (
    <div className="container-fluid">
           <div className="container">
               <div className="content">
                   <Routes>
                       <Route path="/signup"
                       component={SignUp} />

                   </Routes>
               </div>
           </div>
         </div>

  );
}

export default App;
