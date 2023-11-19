import { Link } from "react-router-dom"
import { X } from "react-bootstrap-icons"

const Menu = ({closeMethod}) => {
  return (
    <>
    <button id="close-nav-menu" onClick={closeMethod}>
        <X/>
    </button>
      <ul id="mobile-menu">
        <li>
          <Link to='/' onClick={closeMethod}>Home</Link>
        </li>
      </ul>
    </>
  )
}

export default Menu
