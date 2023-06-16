import { NavLink } from "react-router-dom"
import './Nav.scss'

export const Nav = () => {
    return(
        <>
        <div className='container-nav'>
            <nav className="nav">
                <NavLink to="/" className='icon'><i className="fa-solid fa-house"></i></NavLink>
                <NavLink to="" className='icon'><i className="fa-solid fa-magnifying-glass"></i></NavLink>
                <NavLink to="" className='icon'><i className="fa-solid fa-heart"></i></NavLink>
                <NavLink to="" className='icon'><i className="fa-regular fa-user"></i></NavLink>
            </nav>
        </div>
        </>
    )
}