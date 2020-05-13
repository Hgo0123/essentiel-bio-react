import React, { Component } from 'react'

const AdminFormLegumes = ({ id, legumes, suppLegumes }) => {
    const legume = legumes[id]

    const handleSubmit = (event, id) => {
        event.preventDefault()
        suppLegumes(id)
    }

    return (
        <div className='box'>
            <p>Legumes</p>
            <form className='admin-form ajouter-recette' onSubmit={event => handleSubmit(event, id)}>
                <input value={legume.nom} type="text" name="nom" id="" placeholder='Nom du legumes' />
                <input value={legume.image} type="text" name="image" id="" placeholder="Nom de l'image" />
                <input value={legume.origine} type='text' name="origine" placeholder='Origne' />
                <input value={legume.prix} type='text' name="prix" placeholder='Prix' />
                <button type="submit">Supprimer</button>
            </form>
        </div>
    )
}
export default AdminFormLegumes