import React, { memo } from 'react'

import CardHead from '../Card/CardHead';
import CardDetails from '../Card/CardDetails';
import CardFooter from '../Card/CardFooter';

const Card = ({ admin }) => {
  return (
    <div className="admin-card bg-white rounded-lg shadow-md p-4 grid grid-cols-1 grid-rows-[100px_auto_auto] items-center">
        <CardHead admin={admin}/>
        <CardDetails admin={admin}/>
        <CardFooter admin={admin}/>
    </div>
  )
}

export default memo(Card)
