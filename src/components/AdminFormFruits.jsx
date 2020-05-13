import React from 'react'

const AdminFormFruits = ({ id, fruits, suppFruits }) => {
    const fruit = fruits[id]

    // const handleChange = (event, id) => {
    //     const { name, value } = event.target
    //     const fruit = fruit[id]
    //     fruit[name] = value
    //     majFruit(id, fruit)
    // }
    const handleSubmit = (event, id) => {
        event.preventDefault()
        suppFruits(id)
    }

    return (
        <div className='box'>
            <p>Fruits</p>
            <form className='admin-form ajouter-recette' onSubmit={event => handleSubmit(event, id)}>
                <input value={fruit.nom} type="text" name="nom" id="" placeholder='Nom du fruits' />
                <input value={fruit.image} type="text" name="image" id="" placeholder="Nom de l'image" />
                <input value={fruit.origine} type='text' name="origine" placeholder='Origne' />
                <input value={fruit.prix} type='text' name="prix" placeholder='Prix' />
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