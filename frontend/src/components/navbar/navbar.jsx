import React from "react";
import logo from "../../assets/img/KARIO_LOGO.png";
/* import profile from "../../assets/img/default-avatar.png"
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'; */
import "../../assets/styles/navbar.css";
import * as MdIcons from 'react-icons/md';
import * as Io5Icons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs'

const Navbar = () =>{
    const logOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      };
    return (
        <div className="menu-header">
            <div>
                <Io5Icons.IoAddCircleSharp className = "iconAdd"></Io5Icons.IoAddCircleSharp>
                <p>Añadir</p>
            </div>
            <div>
                <MdIcons.MdOutlineRefresh className = "iconRefresh"></MdIcons.MdOutlineRefresh>
                <p>Refrescar</p>
            </div>
            <div>
                <MdIcons.MdDeleteForever className = "iconDelete"></MdIcons.MdDeleteForever>
                <p>Eliminar</p>
            </div>
            <div>
                <img src = {logo} className = "logo-navbar"></img>
            </div>
            <div>
                <RiIcons.RiBug2Fill className = "iconBug"></RiIcons.RiBug2Fill>
                <p>Reportar</p>
            </div>
            <div>
                <IoIcons.IoIosHelpCircle className = "iconHelp"></IoIcons.IoIosHelpCircle>
                <p>Ayuda</p>
            </div>
            <div className = "perfil-header">
                <BsIcons.BsFillGearFill></BsIcons.BsFillGearFill>
                <MdIcons.MdNotificationsActive className = "iconNotificacion"></MdIcons.MdNotificationsActive>
                {/* <Wrap>
                    <WrapItem>
                        <Avatar size = 'md' name = '' src = {profile}></Avatar>
                    </WrapItem>
                </Wrap> */}
                <button onClick={logOut}>Cerrar Sesión</button>
            </div>
        </div>                
    )
}

export default Navbar;