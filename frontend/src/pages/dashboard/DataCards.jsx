import React from 'react'

const DataCards = ({ cardData }) => {
  return (
    <ul className="data-cards w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 px-4">
      {cardData.map((card) => (
        <li key={card.id} className="data-card bg-white rounded-lg shadow  grid grid-cols-[80px_1fr] relative">
          
          <div className="w-full h-full bg-[#313131] rounded-[10px_40px_40px_10px] flex items-center justify-center text-white" style={{backgroundColor: card.bgColor}}>
            <span className="data-card-value text-[1.3rem] mr-2">{card.data}</span>
          </div>
          <div className="data-card-icon flex flex-col items-center justify-center gap-1 w-full py-2 text-[#424242] font-semibold">
            <card.Icon  className="text-[1.2rem]"/>
            <span className="data-card-label text-[.9rem]">{card.label}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default DataCards
