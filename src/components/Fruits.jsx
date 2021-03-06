import React, { Component } from 'react'
import Header from './Header'
import Card from './Card'
import { Redirect } from 'react-router-dom'


import '../components/Card.scss'



class Fruits extends Component {
    state = {
        goToLegumes: false
    }

    goToLegumes = (event) => {
        event.preventDefault()
        this.setState({
            goToLegumes: true
        })
    }
    render() {
        if (this.state.goToLegumes) {
            return <Redirect push to={{
                pathname: '/legumes',
                state: { fruits: this.props.location.state.fruits, legumes: this.props.location.state.legumes }
            }}></ Redirect>
        }
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
                <Header location={this.props.location.pathname} goToLegumes={this.goToLegumes} />
                <div className='cards'>
                    {cardFruits}
                </div>
            </div >
        )

    }
}
export default Fruits