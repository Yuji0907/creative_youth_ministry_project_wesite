import React, { ReactNode } from 'react'
import "./card.css"
type Props = {
  title:string,
  text:string,
  children?:ReactNode
}

const Card = (props: Props) => {
  return (
    <div className='card-container'>
        <div>
        <h1 className='card-title'>{props.title}</h1>
        <p className='card-text'>{props.text}</p>
        </div>
        <div className='card-graphics'>
          {props.children}
        </div>
    </div>
  )
}

export default Card