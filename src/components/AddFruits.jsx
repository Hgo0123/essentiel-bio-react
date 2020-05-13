import React, { Component } from 'react'
import './Admin.scss'


class AddFruits extends Component {
    state = {
        nom: '',
        image: '',
        origine: '',
        prix: ''
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmitFruit = (event) => {
        event.preventDefault()
        const fruit = { ... this.state }
        this.props.addFruits(fruit)
        Object.keys(fruit).forEach(key => fruit[key] = '')
        this.setState({
            ...fruit
        })
    }
    render() {
        return (
            <div className='box'>
                <p>Fruits</p>
                <form className='admin-form ajouter-recette' onSubmit={this.handleSubmitFruit}>
                    <input value={this.state.nom} onChange={this.handleChange} type="text" name="nom" id="" placeholder='Nom du Fruits' />
                    <input value={this.state.image} onChange={this.handleChange} type="text" name="image" id="" placeholder="Nom de l'image" />
                    <input value={this.state.origine} onChange={this.handleChange} type='text' name="origine" placeholder='Origne' />
                    <input value={this.state.prix} onChange={this.handleChange} type='text' name="prix" placeholder='Prix' />
                    <button type="submit">Valider</button>
                </form>
            </div>
        )
    }
}
export default AddFruits