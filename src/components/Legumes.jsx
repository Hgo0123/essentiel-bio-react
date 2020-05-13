import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Header from './Header'
import Card from './Card'

class Legumes extends Component {
    state = {
        goToFruits: false
    }

    goToFruits = (event) => {
        event.preventDefault()
        this.setState({
            goToFruits: true
        })
    }
    render() {

        if (this.state.goToFruits) {
            return <Redirect push to={{
                pathname: '/fruits',
                state: { fruits: this.props.location.state.fruits, legumes: this.props.location.state.legumes }
            }}></ Redirect>
        }

        const { legumes } = this.props.location.state
        const cardLegumes = Object.keys(legumes).map(item => (
            <Card key={item} nom={legumes[item].nom} origine={legumes[item].origine} prix={legumes[item].prix} image={legumes[item].image} />
        ))
        return (
            <div>
                <Header location={this.props.location.pathname} goToFruits={this.goToFruits} />
                <div className="cards">
                    {cardLegumes}
                </div>
            </div >
        )
    }
}
export default Legumes