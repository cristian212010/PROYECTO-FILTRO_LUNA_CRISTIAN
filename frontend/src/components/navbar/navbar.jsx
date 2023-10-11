import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/img/KARIO_LOGO.png";
import profile from "../../assets/img/default-avatar.png"
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';
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
    Select
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

    useEffect(() => {
        axios.get(`http://localhost:6996/${url}/getAll`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            })

    }, []);

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
    return (
        <div>
            <div className="menu-header">
                <div>
                    <Io5Icons.IoAddCircleSharp className="iconAdd"></Io5Icons.IoAddCircleSharp>
                    <a href="#">Añadir</a>
                </div>
                <div>
                    <MdIcons.MdOutlineRefresh className="iconRefresh"></MdIcons.MdOutlineRefresh>
                    <a href="#">Refrescar</a>
                </div>
                <div onClick={onOpen}>
                    <MdIcons.MdDeleteForever className="iconDelete"></MdIcons.MdDeleteForever>
                    <a href="#">Eliminar</a>
                </div>
                <div>
                    <img src={logo} className="logo-navbar"></img>
                </div>
                <div>
                    <RiIcons.RiBug2Fill className="iconBug"></RiIcons.RiBug2Fill>
                    <a href="#">Reportar</a>
                </div>
                <div>
                    <IoIcons.IoIosHelpCircle className="iconHelp"></IoIcons.IoIosHelpCircle>
                    <a href="#">Ayuda</a>
                </div>
                <div className="perfil-header">
                    <a href="#"><BsIcons.BsFillGearFill className="iconConfig"></BsIcons.BsFillGearFill></a>
                    <a href="#"><MdIcons.MdNotificationsActive className="iconNotificacion"></MdIcons.MdNotificationsActive></a>
                    <Wrap>
                        <WrapItem>
                            <Avatar size='md' name='' src={profile}></Avatar>
                        </WrapItem>
                    </Wrap>
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
                                        }
                                        else if (window.location.pathname === "/home") {
                                            dato = data.indicador
                                        }
                                        return (
                                            <option value={data._id}>{dato}</option>

                                        )
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