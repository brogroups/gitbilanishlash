import { NavLink } from "react-router-dom"
import './style.css'
function Navbar (){
    return(
        <nav className="navbar">
      <div className="container">
        <div className="menu-icon" >
          
        </div>
        <div className={`nav-elements`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/todo">TODO</NavLink>
            </li>
            <li>
              <NavLink to="/calc">Calc</NavLink>
            </li>
            
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
export default Navbar