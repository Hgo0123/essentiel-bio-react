import React, { Component } from 'react'
import pass from '../pass'
import './Connexion.scss'
import Admin from './Admin';


class Connexion extends Component {
    state = {
        userInput: '',
        password: ''
    }

    handleChange = (event) => {
        const userInput = event.target.value
        this.setState({
            userInput: userInput
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(pass);
        console.log(this.state.userInput);
        const userInput = this.state.userInput
        this.setState({
            password: userInput
        })
    }

    render() {

        if (this.state.password === pass) {
            return <Admin ></Admin>
        }

        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    <h1>Admin</h1>
                    <input
                        value={this.state.userInput}
                        onChange={this.handleChange}
                        type='password'
                        placeholder='Mot de passe'
                        required />
                    <button type='submit'>GO</button>
                </form>
            </div>
        )
    }
}
export default Connexion