import { FC, useState } from 'react'
import * as AiIcons from 'react-icons/ai'
import './styles.css'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { getCachedUserInfo } from '../../services/storage/user'

const Navbar: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const userInfo = getCachedUserInfo()

  const showSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Button onClick={showSidebar}>Profile</Button>
        </div>

        <nav className={sidebarOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </ul>
          <div style={{ color: 'white' }}>
            {userInfo.email}

            
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
