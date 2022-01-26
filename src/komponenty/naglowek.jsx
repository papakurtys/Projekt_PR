import  React, { Component } from 'react';
import Logo1 from './logo';
import Zaloguj from './zaloguj';
import Zarejestruj from './zarejestruj';
import Wyszukaj from './wyszukaj';
import Dodaj from './dodaj_film';
import {Link} from "react-router-dom";
import { isExpired, decodeToken  } from "react-jwt";

const naglowek = () => {

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLoggedIn = isExpired(localStorage.getItem('token'));

    return (
        <div style={{width: "100%",
                       height: "10%",
                       position: "fixed",
                       top: 0,
                       right: 0,
                       zIndex: 1,
                       backgroundImage: "linear-gradient(to right, silver, white)" }}>

            {user && <h5 style={{float: 'left'}}>Witaj, {user.name}</h5>}
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
                    <ul style={{ height: "7%",
                                         float: "right",
                                         position: "relative",
                                         top: 0,
                                         right: 0,
                                         textAlign: "center",
                                         marginTop: "10px",
                                         marginRight: "10px"}} className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        {isNotLoggedIn && <li className="nav-item" role="presentation">
                            <Zaloguj />
                        </li>}
                        {isNotLoggedIn && <li className="nav-item" role="presentation">
                            <Zarejestruj />
                        </li>}
                        {!isNotLoggedIn && <li className="nav-item" role="presentation">
                            <a href="/" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true" onClick={() => localStorage.removeItem('token')}>Wyloguj</a>
                        </li>}
                        {!isNotLoggedIn && <li className="nav-item" role="presentation">
                                                    <Dodaj />
                                                </li>}
                    </ul>
                </div>

    );
};

export default naglowek;
