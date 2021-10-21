import React from "react"
import Layout from '../components/Layout'
import Carousel from '../components/InicioComponents/Carousel'
import Nosotros from '../components/InicioComponents/Nosotros'
import ContactForm from '../components/InicioComponents/ContactForm'
import Ubicacion from '../components/InicioComponents/Ubicacion'
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Home({ data }) {

  const galeria = data.galeria.nodes;

  return <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Inicio</title>
    </Helmet>
    <Carousel galeria={galeria} />
    <Nosotros />
    <ContactForm />
    <Ubicacion />
  </Layout>
}

export const query = graphql`
  {
  galeria: allEspecialidadesJson(sort: {fields: nombre, order: ASC}) {
    nodes {
      nombre
      servicios
      imagen {
        childImageSharp {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED, height: 500)
        }
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED, height: 300)
        }
      }
    }
  }
}
`
