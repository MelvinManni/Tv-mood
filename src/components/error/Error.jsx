import React from 'react'
import './error.css'
import icon from './asset/error.svg'


function Error() {
    return (
        <div className='errorFlex'>
            <img src={icon} alt="error icon"/>
            <p><span>Opps</span> seems like an error occured</p>
        </div>
    )
}

export default Error
