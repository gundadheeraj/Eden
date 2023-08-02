import React from 'react'
import './Button.css'

const Button: React.FunctionComponent<{ text: string, onClick: () => void }> = (props) => {
    return <button className='buttonStyles' onClick={props.onClick}>{props.text}</button>
}

export default Button