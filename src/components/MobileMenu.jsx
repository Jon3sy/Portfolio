import { Link } from "react-router-dom"
import { X } from "react-bootstrap-icons"

const MobileMenu = ({closeMethod}) => {
  return (
    <>
    <div>
    <button id="close-nav-menu" onClick={closeMethod}>
        <X/>
    </button>
      <ul id="mobile-menu" >
        <li>
          <Link to='/' onClick={closeMethod}>Home</Link>
        </li>
         <li>
          <Link to='/about' onClick={closeMethod}>About me</Link>
        </li>
        <li>
          <Link to='/allprojects' onClick={closeMethod}>All Projects</Link>
        </li>
        <li>
          <Link to='/contact' onClick={closeMethod}>Contact</Link>
        </li>
      </ul>
      </div>
    </>
  )
}

export default MobileMenu
