import React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Especialidades from '../components/Especialidades'

const especialidades = ({ data }) => {

  const especialidades = data.especialidades.nodes;
  return (
    <Layout>
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
