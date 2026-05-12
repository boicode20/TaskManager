import React from 'react'
import Greetings from '../../components/Greetings/Greetings';
import Dashboardcards from './DashboardCards';

const Dashboard = () => {
  return (
    <div>
        <Greetings user={{name: "John Doe"}}/>
        <Dashboardcards role="Super Admin" data={20}/>
    </div>
  )
}

export default Dashboard
