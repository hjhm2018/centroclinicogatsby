import React from 'react';

import Galeria from './InicioComponents/Carousel';
import Formulario from './InicioComponents/ContactForm';
import Ubicacion from './InicioComponents/Ubicacion';
import Nosotros from './InicioComponents/Nosotros';

const Inicio = () => {
    return (
        <div>
            <Galeria />
            <Nosotros />
            <Formulario />
            <Ubicacion />
        </div>
    )
}

export default Inicio
