import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from "react-helmet"

function ErrorPage() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Error</title>
            </Helmet>
            Page not found
        </Layout>
    )
}

export default ErrorPage
