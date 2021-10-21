import React from 'react'
import Layout from '../components/Layout'
import Nosotros from '../components/InicioComponents/Nosotros'
import { Helmet } from "react-helmet"

const nosotros = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nosotros</title>
            </Helmet>
            <Nosotros />
        </Layout>
    )
}

export default nosotros
