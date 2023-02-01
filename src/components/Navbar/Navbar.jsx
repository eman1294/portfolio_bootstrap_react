import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className={`${style.navbar} navbar fixed-top navbar-expand-lg bg-body-tertiary`}>
                <div className="container">
                    <a className="navbar-brand text-white" href="#header">START BOOTSTRAP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-4">
                            <li className={`${style.nav_item}`}>
                                <a className="nav-link active text-white pt-4 pb-4" aria-current="page" href='#portfolio'>PORTFOLIO</a>
                            </li>
                            <li className={`${style.nav_item}`}>
                                <a className="nav-link text-white pt-4 pb-4" href='#about'>ABOUT</a>
                            </li>
                            <li className={`${style.nav_item}`}>
                                <a className="nav-link text-white pt-4 pb-4" href='#contact'>CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
