import React, { useState } from 'react';
import { FaMailBulk, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');

    return (
        <>
            <div className="row mt-1">
                <div className="col-12">
                    <h2 className="text-center p-2 m-0 bg-info text-white rounded">Contacto <FaMailBulk /></h2>
                </div>

                <div className="col-12 col-md-10 col-lg-6 mt-3 mx-auto">
                    <form id="formulario" className="bg-dark text-white p-5 rounded">
                        <div className="form-group">
                            <label htmlFor="correo">Email</label>
                            <input type="email" className="form-control" id="correo" aria-describedby="emailHelp" required
                                autoComplete="off" onChange={(e) => setCorreo(e.target.value.trim())} />
                            <small id="emailHelp" className="form-text text-muted">Su email no será compartido con
                                nadie.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" className="form-control" id="nombre" required autoComplete="off" onChange={(e) => setNombre(e.target.value.trim())} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea className="form-control" id="mensaje" rows="3" required onChange={(e) => setMensaje(e.target.value.trim())}></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary" disabled={nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === ''}>Enviar <FaPaperPlane /></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm
