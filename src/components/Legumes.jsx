import React, { Component } from 'react'

import Header from './Header'
import Card from './Card'

class Legumes extends Component {
    render() {
        const { legumes } = this.props.location.state
        const cardLegumes = Object.keys(legumes).map(item => (
            <Card key={item} nom={legumes[item].nom} origine={legumes[item].origine} prix={legumes[item].prix} image={legumes[item].image} />
        ))
        return (
            <div>
                <Header location={this.props.location.pathname} />
                <div className="cards">
                    {cardLegumes}
                </div>
            </div >
        )
    }
}
export default Legumes