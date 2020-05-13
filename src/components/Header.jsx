import React from 'react'
import { Redirect } from 'react-router-dom'

import './Header.scss'
import { Component } from 'react'

class Header extends Component {
    state = {
        goToHome: false
    }

    goToHome = (event) => {
        event.preventDefault()
        this.setState({
            goToHome: true
        })
    }

    render() {
        if (this.state.goToHome) {
            return <Redirect push to='/'></Redirect>
        }

        return (
            <header>
                <nav>
                    {this.props.location === '/fruits' || this.props.location === '/legumes' ? <span className='link' onClick={this.goToHome}><li>Essentiel Bio</li></span> : <span ><li>Essentiel Bio</li></span>}
                    <li>Fruits</li>
                    <li>Legumes</li>
                    <li>Recettes</li>
                </nav>
            </header >
        )
    }
}
export default Header