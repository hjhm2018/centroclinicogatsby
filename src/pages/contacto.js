import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/InicioComponents/ContactForm'
import { Helmet } from "react-helmet"

const contacto = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contacto</title>
            </Helmet>
            <ContactForm />
        </Layout>
    )
}

export default contacto
