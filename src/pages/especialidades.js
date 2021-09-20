import React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Especialidades from '../components/Especialidades'

const especialidades = ({ data }) => {

  console.log(data);
  const especialidades = data.especialidades.nodes;
  return (
    <Layout>
      <Especialidades especialidades={especialidades} />
    </Layout>
  )
}

export const query = graphql`
  {
  especialidades: allEspecialidadesJson {
    nodes {
      imagen {
        childImageSharp {
          gatsbyImageData
        }
      }
      id
      nombre
      servicios
    }
  }
}
`

export default especialidades
