import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'

import '../components/Card.scss'



class Fruits extends Component {

    render() {
        const { fruits } = this.props.location.state
        const cardFruits = Object.keys(fruits).map(item => (
            <Card key={item}
                onClick={event => this.goToPage(event, item)}
                nom={fruits[item].nom}
                origine={fruits[item].origine}
                prix={fruits[item].prix}
                image={fruits[item].image} />
        ))

        return (
            <div>
                <Header location={this.props.location.pathname} />
                <div className='cards'>
                    {cardFruits}
                </div>
            </div >
        )

    }
}
export default Fruits