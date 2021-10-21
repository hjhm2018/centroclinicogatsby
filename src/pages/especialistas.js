import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Especialistas from '../components/Especialistas'
import { Helmet } from "react-helmet"

const especialistas = ({ data }) => {

  const especialidades = data.especialidades.nodes;
  const especialistas = data.especialistas.nodes;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Especialistas</title>
      </Helmet>
      <Especialistas especialidades={especialidades} especialistas={especialistas} />
    </Layout>
  )
}

export const query = graphql`
  {
  especialidades: allEspecialidadesJson(sort: {fields: nombre, order: ASC}) {
    nodes {
      nombre
    }
  }
  especialistas: allEspecialistasJson(sort: {fields: especialidad, order: ASC}) {
    nodes {
      nombre
      especialidad
      horario
    }
  }
}
`

export default especialistas
