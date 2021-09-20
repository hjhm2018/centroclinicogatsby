import React from 'react';
import especialidades from '../../data/especialidades';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';


const Galeria = () => {
    const location = useLocation();

    return (
        <div className="col-lg-10 mb-2 mx-auto">
            {
                location.pathname === '/' && (
                    <>
                        <div className="d-block d-md-none" id="nosotros"></div>
                    </>
                )
            }
            <Carousel>
                {especialidades && especialidades.map((especialidad, index) => (

                    <Carousel.Item key={index}>
                        <img
                            className="d-none d-md-block w-100"
                            height={500}
                            src={especialidad.imagen}
                            alt={`foto-${especialidad.especialidad}`}
                        />
                        <img
                            className="d-block d-md-none w-100"
                            height={300}
                            src={especialidad.imagen}
                            alt={`foto-${especialidad.especialidad}`}
                        />
                        <Carousel.Caption className="rounded text-dark p-2" style={{ background: `rgba(255, 255, 255, 0.5)` }}>
                            <h3>{especialidad.especialidad}</h3>
                            <p>{especialidad.servicios}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>
        </div>
    )
}

export default Galeria;
