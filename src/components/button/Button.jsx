import React from 'react'
import './Button.css'


export default props => {
    return (

        <button
            onClick={e => props.Click && props.Click(props.label)}
            className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
            {props.label}
        </button>

    )
}