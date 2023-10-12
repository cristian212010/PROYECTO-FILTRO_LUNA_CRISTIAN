import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/img/KARIO_LOGO.png";
import { Link } from 'react-router-dom';
import "../../assets/styles/navbar.css";
import * as MdIcons from 'react-icons/md';
import * as Io5Icons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Select,
    Wrap,
    WrapItem,
    Avatar,
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
} from '@chakra-ui/react'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [APIData, setAPIData] = useState([]);
    const [_id, setID] = useState("");

    let url = ""
    let dato = ""

    if (window.location.pathname === "/reports") {
        url = "reportes"
    }
    else if (window.location.pathname === "/home") {
        url = "indicadores"
    }
    else if (window.location.pathname === "/help") {
        url = "indicadores"
    }
    else if (window.location.pathname === "/crearIndicadores") {
        url = "indicadores"
    }
    else if (window.location.pathname === "/crearReportes") {
        url = "indicadores"
    }
    else if (window.location.pathname === "/editProfile") {
        url = "indicadores"
    }
    

    useEffect(() => {
        axios.get(`http://localhost:6996/${url}/getAll`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            })

    }, []);

    const BtnAdd = () => {
        if (window.location.pathname === "/reports") {
            return(
                <Link to='/crearReportes'>
                    <div className="btn_navbar">
                        <Io5Icons.IoAddCircleSharp className="iconAdd"></Io5Icons.IoAddCircleSharp>
                        <a className="navbar-btn">Añadir</a>
                    </div>
                </Link>
            )
        }
        else if (window.location.pathname === "/home") {
            return(
                <Link to='/crearIndicadores'>
                    <div className="btn_navbar">
                        <Io5Icons.IoAddCircleSharp className="iconAdd"></Io5Icons.IoAddCircleSharp>
                        <a className="navbar-btn">Añadir</a>
                    </div>
                </Link>
            )
            
        }
        else if (window.location.pathname === "/help") {
            return(
                <Link to='/crearIndicadores'>
                    <div className="btn_navbar">
                        <Io5Icons.IoAddCircleSharp className="iconAdd"></Io5Icons.IoAddCircleSharp>
                        <a className="navbar-btn">Añadir</a>
                    </div>
                </Link>
            )
        }
        else if (window.location.pathname === "/crearIndicadores") {
            return(
                <Link to='/crearReportes'>
                    <div className="btn_navbar">
                        <Io5Icons.IoAddCircleSharp className="iconAdd"></Io5Icons.IoAddCircleSharp>
                        <a className="navbar-btn">Añadir</a>
                    </div>
                </Link>
            )
        }
        else if (window.location.pathname === "/crearReportes") {
            return(
                <Link to='/crearIndicadores'>
                    <div className="btn_navbar">
                        <Io5Icons.IoAddCircleSharp className="iconAdd"></Io5Icons.IoAddCircleSharp>
                        <a className="navbar-btn">Añadir</a>
                    </div>
                </Link>
            )
        }
        else if (window.location.pathname === "/editProfile") {
            return(
                <Link to='/crearIndicadores'>
                    <div className="btn_navbar">
                        <Io5Icons.IoAddCircleSharp className="iconAdd"></Io5Icons.IoAddCircleSharp>
                        <a className="navbar-btn">Añadir</a>
                    </div>
                </Link>
            )
        }
    };

    const getData = () => {
        axios.get(`http://localhost:6996/${url}/getAll`)
            .then((getData) => {
                setAPIData(getData.data)
            })
    };

    const onDelete = (_id) => {
        axios.delete(`http://localhost:6996/${url}/delete/${_id}`)
            .then(() => {
                getData();
            })
    };

    const logOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const avatar = localStorage.getItem('avatar');
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="menu-header">
                {
                    <BtnAdd></BtnAdd>
                }
                <div className="btn_navbar">
                    <MdIcons.MdOutlineRefresh className="iconRefresh"></MdIcons.MdOutlineRefresh>
                    <a href="" className="navbar-btn">Refrescar</a>
                </div>
                <div className="btn_navbar" onClick={onOpen}>
                    <MdIcons.MdDeleteForever className="iconDelete"></MdIcons.MdDeleteForever>
                    <a className="navbar-btn">Eliminar</a>
                </div>
                <Link to='/home'>
                    <div className="btn_navbar">
                        <img src={logo} className="logo-navbar"></img>
                    </div>
                </Link>
                <Link to='/reports'>
                    <div className="btn_navbar">
                        <RiIcons.RiBug2Fill className="iconBug"></RiIcons.RiBug2Fill>
                        <a>Reportar</a>
                    </div>
                </Link>
                <Link to='/help'>
                    <div className="btn_navbar">
                        <IoIcons.IoIosHelpCircle className="iconHelp"></IoIcons.IoIosHelpCircle>
                        <a>Ayuda</a>
                    </div>
                </Link>
                <div className="btn_navbar">
                    <Link to='/home'>
                        <a><BsIcons.BsFillGearFill className="iconConfig"></BsIcons.BsFillGearFill></a>
                    </Link>
                    <Link to='/home'>
                        <a ><MdIcons.MdNotificationsActive className="iconNotificacion"></MdIcons.MdNotificationsActive></a>
                    </Link>
                    <div className="User_Menu">
                        <Menu>
                            <MenuButton background={"transparent"} as={Button} >
                                <Wrap>
                                    <WrapItem>
                                        <Avatar size='md' name='' src={avatar}></Avatar>
                                    </WrapItem>
                                </Wrap>
                            </MenuButton>
                            <MenuList display="flex" flexDirection="colum">
                                <Link to="/editProfile">
                                    <MenuItem>Editar perfil </MenuItem>
                                </Link>
                                <Link to='/login'>
                                    <MenuItem onClick={logOut}>Cerrar Sesión</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>

                    </div>

                </div>
            </div>
            <>
                <Modal isOpen={isOpen} size={"lg"} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Eliminar Datos</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Select className="" id="" onChange={(e) => { setID(e.target.value) }}>
                                {

                                }
                                <option>Selecciona El Dato a eliminar</option>
                                {

                                    APIData.map((data) => {
                                        if (window.location.pathname === "/reports") {
                                            dato = data.problema
                                            return (
                                                <option value={data._id}>{dato}</option>
    
                                            )
                                        }
                                        else if (window.location.pathname === "/home") {
                                            dato = data.indicador
                                            return (
                                                <option value={data._id}>{dato}</option>
    
                                            )
                                        }
                                        else if (window.location.pathname === "/help") {
                                            dato = "aqui no hay nada que borrar, lo tengo vigilado"

                                        }
                                        else if (window.location.pathname === "/crearIndicadores") {
                                            dato = "aqui no hay nada que borrar, lo tengo vigilado"

                                        }
                                        else if (window.location.pathname === "/crearReportes") {
                                            dato = "aqui no hay nada que borrar, lo tengo vigilado"

                                        }
                                        else if (window.location.pathname === "/editProfile") {
                                            dato = "aqui no hay nada que borrar, lo tengo vigilado"

                                        }
                                        
                                    })
                                }
                            </Select>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost' onClick={() => onDelete(_id)}>Eliminar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </div>
    )
}

export default Navbar;