import {useState} from 'react'
// import mobile menu
import MobileMenu from './MobileMenu'
import {Link} from "react-router-dom"
// import List for bootstrap icons
import { List } from 'react-bootstrap-icons'

const Header = () => {
    //set a state to check if the mobile menu is open or not
    const [menuIsOpen, openMenu] = useState(false);

    const toggleMobileMenu = () => {
        openMenu(!menuIsOpen);
        document.body.classList.toggle('no-scroll');
    }
  return (
    <>
     <div id='topnav'>
        <div id='logo'>
            <Link to="/">Ethan Jones</Link>
        </div>

        {/* Hamburger on desktop */}
        <div id='menu-container'>
            <button id='menu-button' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                <List id='hamburger-icon'/>
            </button>
        </div>
     </div>

     {/* If menuIsOpen, show the mobile menu */}
     {/* give the mobile menu our close method as a prop */}
     {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
    </>
  )
}

export default Header