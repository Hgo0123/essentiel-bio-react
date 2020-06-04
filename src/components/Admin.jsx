import React, { Component } from 'react'
import './Admin.scss'
import AddFruits from './AddFruits'
import AddLegumes from './AddLegumes'
import AdminFormFruits from './AdminFormFruits'
import AdminFormLegumes from './AdminFormLegumes'




class Admin extends Component {
    render() {
        const { addFruits, addLegumes, suppFruits, suppLegumes, fruits, legumes, majFruit, majLegumes } = this.props
        return (
            <div className="cards">
                <AddFruits addFruits={addFruits} />
                <AddLegumes addLegumes={addLegumes} />
                {Object.keys(fruits).map(item => (
                    <AdminFormFruits key={item} id={item} fruits={fruits} suppFruits={suppFruits} majFruit={majFruit} />
                ))}
                {Object.keys(legumes).map(item => (
                    <AdminFormLegumes key={item} id={item} legumes={legumes} suppLegumes={suppLegumes} majLegumes={majLegumes} />
                ))}
            </div>
        )
    }
}
export default Admin