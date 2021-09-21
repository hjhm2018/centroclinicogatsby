import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

const Especialistas = ({ especialidades, especialistas }) => {

    const [especialidad, setEspecialidad] = useState('');
    const [nombre, setNombre] = useState('');

    return (
        <div>
            <div className="col-12">
                <h2 className="text-center bg-info text-white rounded p-2">Especialistas</h2>
            </div>
            <div className="col-12 mx-auto d-flex justify-content-center flex-wrap">
                <div className="col-md-6 col-12 mx-auto p-2">
                    <input type="text" className="text-center form-control"
                        placeholder="Filtrar por nombre" onChange={(e) => setNombre(e.target.value.toLowerCase())} />
                </div>
                <div className="col-md-6 col-12 p-2">
                    <select className="form-control" onChange={(e) => setEspecialidad(e.target.value.toLowerCase())}>
                        <option value="">Filtrar por Especialidad</option>
                        {especialidades.map((especialidad, index) => (
                            <option key={index} value={especialidad.nombre}>{especialidad.nombre}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="col-lg-10 mx-auto d-flex justify-content-center flex-wrap">
                {especialistas && especialistas.filter(especialista =>

                    (nombre && !especialista.nombre.toLowerCase().includes(nombre)) ? false : (especialidad && especialista.especialidad.toLowerCase() !== especialidad) ? false : true

                ).map(((especialista, index) => (
                    <Card className="text-center m-2" style={{ width: '18rem' }} key={index}>
                        <Card.Body>
                            <Card.Title>{especialista.nombre}</Card.Title>

                            <h6>{especialista.especialidad}</h6>
                            <p><span className="font-weight-bold">Horario: </span>{especialista.horario}</p>

                        </Card.Body>
                    </Card>
                )))}
                {especialistas.filter(especialista => especialista.nombre.toLowerCase().includes(nombre)).length < 1 && <div className="col-12 p-5 text-center font-weight-bold">No hay resultados</div>}
            </div>
        </div>
    )
}

export default Especialistas
