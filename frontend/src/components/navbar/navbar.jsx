import React from "react";
import logo from "../../assets/img/KARIO_LOGO.png";
import "../../assets/styles/navbar.css";

const Navbar = () =>{
    return (
        <div className="menu-header">
            <div>
                <p>Añadir</p>
            </div>
            <div>
                <p>Refrescar</p>
            </div>
            <div>
                <p>Eliminar</p>
            </div>
            <div>
                <img src={logo} className="logo-navbar"></img>
            </div>
            <div>
                <p>Reportar</p>
            </div>
            <div>
                <p>Ayuda</p>
            </div>
            <div className="perfil-header">
                <p>a</p>
                <p>a</p>
                <p>a</p>
            </div>
        </div>                
    )
}

export default Navbar;