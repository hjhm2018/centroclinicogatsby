import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Galeria = ({ galeria }) => {

    return (
        <div className="col-lg-10 mb-2 mx-auto">

            <Carousel>
                {galeria && galeria.map((item, index) => (

                    <Carousel.Item key={index}>
                        <GatsbyImage className="d-none d-md-block w-100" image={getImage(item.imagen.childImageSharp.gatsbyImageData)} alt={`foto-${item.nombre}`} />
                        <GatsbyImage className="d-block d-md-none w-100" image={getImage(item.imagen.childrenImageSharp[0].gatsbyImageData)} alt={`foto-${item.nombre}`} />
                        {/* <img
                            className="d-none d-md-block w-100"
                            height={500}
                            src={item.imagen}
                            alt={`foto-${item.nombre}`}
                        />
                        <img
                            className="d-block d-md-none w-100"
                            height={300}
                            src={item.imagen}
                            alt={`foto-${item.especialidad}`}
                        /> */}
                        <Carousel.Caption className="rounded text-dark p-2" style={{ background: `rgba(255, 255, 255, 0.5)` }}>
                            <h3>{item.nombre}</h3>
                            <p>{item.servicios}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>
        </div>
    )
}

export default Galeria;
