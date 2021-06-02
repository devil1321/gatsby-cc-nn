import React from 'react'
import Navbar from './Navbar'
import '../styles/themes/theme.scss'
const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Cophyright 2021 Web Warrior</p>
            </footer>
        </div>
    )
}

export default Layout
