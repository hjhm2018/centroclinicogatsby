import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Nosotros = () => {

    return (
        <>
            <div className="d-flex justify-content-center flex-wrap align-items-center  ml-md-5 ml-2 px-2 px-md-4">
                <div className="col-12">
                    <h2 className="text-center">Nosotros</h2>
                </div>

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
        </>
    )
}

export default Nosotros;
