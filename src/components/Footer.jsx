import React from 'react'
import './Footer.scss'

const Footer = ({ showInput }) => {
    return (
        <div className='footer' >
            <h4 class='link' onClick={showInput}>Admin</h4>
        </div>
    )
}

export default Footer