import React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Especialidades from '../components/Especialidades'
import { Helmet } from "react-helmet"

const especialidades = ({ data }) => {

  const especialidades = data.especialidades.nodes;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Especialidades</title>
      </Helmet>
      <Especialidades especialidades={especialidades} />
    </Layout>
  )
}

export const query = graphql`
  {
  especialidades: allEspecialidadesJson(sort: {fields: nombre, order: ASC}) {
    nodes {
      nombre
      servicios
      imagen {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, height: 200)
        }
      }
    }
  }
}
`

export default especialidades
