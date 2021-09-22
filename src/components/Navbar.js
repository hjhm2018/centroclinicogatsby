import React from 'react';
import { Link } from 'gatsby';
import { Nav, Navbar } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"

const Navigationbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand='lg' bg="light" variant="light" sticky="top">
                <Navbar.Brand as={Link} to='/'>
                    <StaticImage
                        src="../assets/imagenes/logo.png"
                        alt="Logo"
                        placeholder="blurred"
                        layout="fixed"
                        width={250}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link eventKey={2} as={Link} to='/' className="border border-info text-info rounded text-center mr-1" >Inicio</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to='/nosotros' className="border border-info text-info rounded text-center mr-1">Nosotros</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to='/especialidades' className="border border-info text-info rounded text-center mr-1">Especialidades</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to='/especialistas' className="border border-info text-info rounded text-center mr-1">Especialistas</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to='/contacto' className="border border-info text-info rounded text-center mr-1">Contacto</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to='/ubicacion' className="border border-info text-info rounded text-center mr-1">Ubicación</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigationbar;
