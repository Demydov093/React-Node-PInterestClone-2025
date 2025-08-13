import './mainLayout.css'

import LeftBar from '../components/leftBar/leftBar'
import TopBar from '../components/topBar/topBar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='mainLayout'>
      <LeftBar/>
      <div className="container">
        <TopBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout