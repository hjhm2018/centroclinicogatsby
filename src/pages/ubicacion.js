import React from 'react'
import Layout from '../components/Layout'
import Ubicacion from '../components/InicioComponents/Ubicacion'
import { Helmet } from "react-helmet"

const ubicacion = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ubicación</title>
            </Helmet>
            <Ubicacion />
        </Layout>
    )
}

export default ubicacion
