import React from 'react';
import image from '../../imagenes/nosotros.jpg';
import { useLocation } from 'react-router-dom';

const Nosotros = () => {
    const location = useLocation();

    return (
        <>
            <div className="d-flex justify-content-center flex-wrap align-items-center  ml-md-5 ml-2 px-2 px-md-4">
                <div className="col-12">
                    <h2 className="text-center">Nosotros</h2>
                </div>

                <div className="col-md-6 col-12 text-center pl-2 pl-md-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et adipisci ipsum porro optio, ducimus culpa iste illum, nobis tempora non vitae aut repellat recusandae quae fugit. Quas, sapiente quia.
                </div>
                {/* Debido a un bug debo colocar este container aquí en la página de inicio */}
                {
                    location.pathname === '/' && (
                        <>
                            <div id="formulario"></div>
                        </>
                    )
                }
                <div className="col-md-6 col-12 text-center pt-3 pl-2">
                    <img className="d-none d-md-inline-block" src={image} style={{ height: '300px' }} alt="Nosotros" />
                    <img className="d-md-none d-inline-block" src={image} style={{ height: '200px' }} alt="Nosotros" />
                </div>
            </div>
        </>
    )
}

export default Nosotros;
