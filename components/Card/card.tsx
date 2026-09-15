import React from 'react'
import "./card.css"
type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card-container'>
        <div>
        <h1 className='card-title'>text</h1>
        <p className='card-text'>text</p>
        </div>
        <div className='card-graphics'></div>
    </div>
  )
}

export default Card