import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { FaHandshake } from "react-icons/fa";

const Nosotros = () => {

    return (
        <div className="row">
            <div className="col-12">
                <h2 className="text-center p-2 mb-2 mb-0 bg-info text-white rounded">Nosotros <FaHandshake /> </h2>
            </div>
            <div className="d-flex justify-content-center flex-wrap align-items-center  ml-md-5 ml-2 px-2 px-md-4">


                <div className="col-md-6 col-12 text-center pl-2 pl-md-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et adipisci ipsum porro optio, ducimus culpa iste illum, nobis tempora non vitae aut repellat recusandae quae fugit. Quas, sapiente quia.
                </div>
                <div className="col-md-6 col-12 text-center pt-3 pl-2">
                    <StaticImage
                        src="../../assets/imagenes/nosotros.jpg"
                        className="d-none d-md-inline-block"
                        alt="Nosotros"
                        placeholder="blurred"
                        layout="fixed"
                        width={300}
                        height={300}
                    />
                    <StaticImage
                        src="../../assets/imagenes/nosotros.jpg"
                        alt="Nosotros"
                        className="d-md-none d-inline-block"
                        placeholder="blurred"
                        layout="fixed"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}

export default Nosotros;
