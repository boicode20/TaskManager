import React from 'react'

const DataCards = ({ cardData }) => {
  return (
    <ul className="data-cards w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-4 px-4">
      {cardData.map((card) => (
        <li key={card.id} className="data-card bg-white rounded-lg shadow p-4 flex flex-col items-center">
          
          <span className="data-card-value text-[1.3rem]">{card.data}</span>
          <div className="data-card-icon flex items-center gap-1">
            <card.Icon  />
            <span className="data-card-label">{card.label}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default DataCards
