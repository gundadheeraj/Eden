import React, { useState } from 'react'
import './Input.css'

const Input: React.FunctionComponent<any> = (props) => {
    const onChange= (evt: any) => {
        props.onChange({...{...props.currentData, [props.id]: evt.target.value}})
    }
    return <div className='inputStyles'>
        <span>{props.label}</span>
        <input name={props.id} type={props.type} placeholder={props.placeholder} onChange={(evt)=>onChange(evt)} value={props.currentData[props.id] || props.data[props.id] || ''}/>
    </div>
}

export default Input