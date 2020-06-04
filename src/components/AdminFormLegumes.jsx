import React, { Component } from 'react'

const AdminFormLegumes = ({ id, legumes, suppLegumes, majLegumes }) => {
    const legume = legumes[id]

    const handleChange = (event, id) => {
        const { name, value } = event.target
        const legume = legumes[id]
        legume[name] = value
        majLegumes(id, legume)
    }

    const handleSubmit = (event, id) => {
        event.preventDefault()
        suppLegumes(id)
    }

    return (
        <div className='box'>
            <p>Legumes</p>
            <form className='admin-form ajouter-recette' onSubmit={event => handleSubmit(event, id)}>
                <input value={legume.nom} onChange={event => handleChange(event, id)} type="text" name="nom" id="" placeholder='Nom du legumes' />
                <input value={legume.image} onChange={event => handleChange(event, id)} type="text" name="image" id="" placeholder="Nom de l'image" />
                <input value={legume.origine} onChange={event => handleChange(event, id)} type='text' name="origine" placeholder='Origne' />
                <input value={legume.prix} onChange={event => handleChange(event, id)} type='text' name="prix" placeholder='Prix' />
                <button type="submit">Supprimer</button>
            </form>
        </div>
    )
}
export default AdminFormLegumes