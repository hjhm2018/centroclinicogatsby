import React from 'react'
import Navigationbar from './Navbar'
import Footer from './Footer'
import '../assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Navigationbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
