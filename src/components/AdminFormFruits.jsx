import React from 'react'

const AdminFormFruits = ({ id, fruits, suppFruits, majFruit }) => {
    const fruit = fruits[id]

    const handleChange = (event, id) => {
        const { name, value } = event.target
        const fruit = fruits[id]
        fruit[name] = value
        majFruit(id, fruit)
    }
    const handleSubmit = (event, id) => {
        event.preventDefault()
        suppFruits(id)
    }

    return (
        <div className='box'>
            <p>Fruits</p>
            <form className='admin-form ajouter-recette' onSubmit={event => handleSubmit(event, id)}>
                <input value={fruit.nom} onChange={event => handleChange(event, id)} type="text" name="nom" id="" placeholder='Nom du fruits' />
                <input value={fruit.image} onChange={event => handleChange(event, id)} type="text" name="image" id="" placeholder="Nom de l'image" />
                <input value={fruit.origine} onChange={event => handleChange(event, id)} type='text' name="origine" placeholder='Origne' />
                <input value={fruit.prix} onChange={event => handleChange(event, id)} type='text' name="prix" placeholder='Prix' />
                <button type="submit">Supprimer</button>
            </form>
        </div>
    )

}
// onChange={event => handleChange(event, id)}
// onChange={event => handleChange(event, id)}
// onChange={event => handleChange(event, id)}
// onChange={event => handleChange(event, id)}

export default AdminFormFruits