import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand navbar__logo" to="/">
            <img src="https://static.vecteezy.com/system/resources/previews/027/127/591/original/pokemon-logo-pokemon-icon-transparent-free-png.png" alt="logo" width="200px"/>
          </Link>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link link__nav me-4" to="/">
                  Lista de pokemon
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link link__nav me-4" to="/frontexplication">
                  Explicacion del frontend
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link__nav" to="/explicacionBack">
                Explicacion del backend
                </Link>
              </li>
            </ul>
            
          </div>
          
        </div>
        
      </nav>
      
    </div>
  );
};

export default Navegacion;
