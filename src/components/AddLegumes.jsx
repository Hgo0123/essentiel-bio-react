import React, { Component } from 'react'
import './Admin.scss'


class AddLegumes extends Component {
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

    handleSubmitLegumes = (event) => {
        event.preventDefault()
        const legume = { ... this.state }

        this.props.addLegumes(legume)
        Object.keys(legume).forEach(key => legume[key] = '')
        this.setState({
            ...legume
        })
    }
    render() {
        return (
            <div className='box'>
                <p>Legumes</p>
                <form className='admin-form ajouter-recette' onSubmit={this.handleSubmitLegumes}>

                    <input value={this.state.nom} onChange={this.handleChange} type="text" name="nom" id="" placeholder='Nom du Legumes' />
                    <input value={this.state.image} onChange={this.handleChange} type="text" name="image" id="" placeholder="Nom de l'image" />
                    <input value={this.state.origine} onChange={this.handleChange} type='text' name="origine" placeholder='Origne' />
                    <input value={this.state.prix} onChange={this.handleChange} type='text' name="prix" placeholder='Prix' />
                    <button type="submit">Valider</button>
                </form>
            </div>
        )
    }
}
export default AddLegumes