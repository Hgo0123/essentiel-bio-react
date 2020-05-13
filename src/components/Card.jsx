import React from 'react'
import '../components/Card.scss'

const Card = ({ nom, origine, prix, image }) => {

    const requireImage = (path) => {
        try {
            return require(`../assets/${path}`)
        } catch (error) {
            return require(`../assets/default.jpg`)
        }
    }
    return (
        <div className="card">
            <div className="image">
                <img src={requireImage(image)} alt="" />
            </div>
            <div className="details">
                <p className="details__origine">{origine}</p>
                <div className="details__flex">
                    <p className="details__nom">{nom}</p>
                    <p className="details__prix">{prix}</p>
                </div>
            </div>
        </div>
    )
}
export default Card