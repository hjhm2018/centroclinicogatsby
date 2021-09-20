import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"

const especialistas = ({ data }) => {

  console.log(data);

  return (
    <Layout>
      Especialistas
    </Layout>
  )
}

export const query = graphql`
  {
  especialistas: allEspecialistasJson(sort: {fields: especialidad, order: ASC}) {
    nodes {
      id
      especialidad
      horario
      nombre
    }
  }
}

`

export default especialistas
