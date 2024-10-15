import React from 'react'
import { cards } from '../constants'

const Card = () => {
  return (
    <div className="container box-border">
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1'>
      {cards.map((card) => (
        <div
        key={card.id}
        className='box-border w h-40 g7 m-4 p-4 flex justify-center items-center rounded-lg md:box-content'
        >
          <div className='grid grid-cols-1 gap-2 items-center justify-center text-center'>
            <div className='p-2'>
            <h3 className='text-white text-lg font-bold'>{card.id}</h3>
          </div>
          <div className=''>
            <h2 className='text-white bold text-3xl'>{card.text}</h2>
            </div>
        </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Card