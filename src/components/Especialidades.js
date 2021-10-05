import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaMedkit } from "react-icons/fa";

const Especialidades = ({ especialidades }) => {

    const [modalContenido, setModalContenido] = useState({ titulo: '', descripcion: '' });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (a, b) => {
        setShow(true);
        setModalContenido({ titulo: a, descripcion: b });
    };

    const [especialidadNombre, setEspecialidadNombre] = useState('');

    return (
        <div>
            <div className="col-12">
                <h2 className="text-center bg-info text-white rounded p-2">Especialidades <FaMedkit /></h2>
            </div>
            <div className="d-none d-md-block mx-auto col-10 text-center mb-2">
                {especialidades && especialidades.map((especialidad, index) => (
                    index % 2 === 0 ?
                        <button class="badge badge-info m-1 border-info" onClick={() => setEspecialidadNombre(`${especialidad.nombre.toLowerCase()}`)}>#{especialidad.nombre}</button> :
                        <button class="badge badge-secondary m-1 border-secondary" onClick={() => setEspecialidadNombre(`${especialidad.nombre.toLowerCase()}`)}>#{especialidad.nombre}</button>
                ))}
            </div>
            <div className="text-center mx-auto col-10">
                <input type="text" onChange={(e) => setEspecialidadNombre(e.target.value.toLowerCase())} className="rounded text-center"
                    placeholder="Filtrar por especialidad" />
            </div>
            <div className="col-lg-10  mx-auto d-flex justify-content-center flex-wrap">
                {especialidades && especialidades.filter(respuesta => respuesta.nombre.toLowerCase().includes(especialidadNombre)).map((especialidad, index) => (
                    <Card style={{ width: '18rem' }} className="text-center m-2" key={index}>
                        <GatsbyImage image={getImage(especialidad.imagen.childImageSharp.gatsbyImageData)} alt={`foto-${especialidad.nombre}`} />
                        <Card.Body>
                            <Card.Title>{especialidad.nombre}</Card.Title>
                            <Button variant="primary" onClick={() => handleShow(`${especialidad.nombre}`, `${especialidad.servicios}`)}>
                                Más Info
                            </Button>
                        </Card.Body>
                    </Card>
                ))}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="ml-auto">{modalContenido.titulo}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">{modalContenido.descripcion}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
                {especialidades.filter(respuesta => respuesta.nombre.toLowerCase().includes(especialidadNombre)).length < 1 && <div className="col-12 p-5 text-center font-weight-bold">No hay resultados</div>}
            </div>
        </div>
    )
}

export default Especialidades;
