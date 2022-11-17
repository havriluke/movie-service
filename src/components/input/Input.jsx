import React from 'react'
import './input.scss'

const Input = props => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            onKeyPress={props.onKeyPress ? (e) => props.onKeyPress(e) : null}
        />
    )
}

export default Input