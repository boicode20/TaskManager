import React from 'react'

import CardHead from '../Card/CardHead';
import CardDetails from '../Card/CardDetails';
import CardFooter from '../Card/CardFooter';

const Card = () => {
  return (
    <div className="admin-card bg-white rounded-lg shadow-md p-4 grid grid-cols-1 grid-rows-[120px_auto] items-center">
        <CardHead/>
        <CardDetails/>
        <CardFooter/>
    </div>
  )
}

export default Card
