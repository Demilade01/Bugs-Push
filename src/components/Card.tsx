import React from 'react'
import { cards } from '../constants'

const Card = () => {
  return (
    <div className="container box-border">
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 '>
      {cards.map((card) => (
      <div
      key={card.id}
      className='h-40 bg-box  m-4 p-4 flex justify-center items-center rounded-lg md:box-content' // This line modifies the div colors
      >
        <div className='grid grid-cols-1 gap-2 items-center justify-center text-center'>
        <div className=''>
        <h3 className='text-white text-5xl font-bold'>{card.id}</h3>
        </div>
        <div className='-mt-2'>
        <h2 className='text-white text-p1  '>{card.text}</h2>
        </div>
      </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Card