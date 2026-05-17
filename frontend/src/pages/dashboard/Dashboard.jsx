import React, { useContext } from 'react'
import Greetings from '../../components/Greetings/Greetings';
import Dashboardcards from './DashboardCards';
import DashCharts from './DashCharts';
import { UserContext } from '../../provider/UserProvider';

const Dashboard = () => {
  const {user,setUser} = useContext(UserContext)
  return (
    <div>
        <Greetings user={user}/>
        <Dashboardcards role={user.role} data={20}/>
        <DashCharts role={user.role} data={20}/>
    </div>
  )
}

export default Dashboard
