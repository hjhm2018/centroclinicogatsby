import React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"

const especialidades = ({ data }) => {

  console.log(data);
  return (
    <Layout>
      Especialidades
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
