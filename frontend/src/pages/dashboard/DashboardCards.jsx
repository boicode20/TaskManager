import React, { memo } from 'react'
import useDataCards from '../../hooks/useDataCards';
import DataCards from './DataCards';


const DashboardCards = ({role,data}) => {
    const cardData = useDataCards(role,data);
  return (
    <div className="dashboard-cards">
        <DataCards cardData={cardData}/>
    </div>
  )
}

export default memo(DashboardCards)
