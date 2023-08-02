import React, { useState } from 'react'
import './Card.css'

const Card: React.FunctionComponent<any> = (props) => {
    debugger
    const [selected, setSelected] = useState(!!props.accountType === props.currentData.accountType)
    const onClick = () => {
        setSelected(true)
        props.onChange({...{...props.data, [props.id]: props.accountType}})
    }
    return <div className={`cardStyles ${props.accountType === props.data.accountType || selected ? 'sel' : null}`} onClick={onClick}>
        <img src={props.icon} className="App-logo" alt="logo" />
        <div>{props.title}</div>
        <div>{props.description}</div>
    </div>
}

export default Card