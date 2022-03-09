import { NavLink } from "react-router-dom"

const Navigation = ({prev, next}) =>{
    return(
        <nav className="router">
            <NavLink to={prev}><div className="previous"></div></NavLink>
            <NavLink to="/info"><div className="page-completed"></div></NavLink>
            <NavLink to="/skills"><div className="page-completed"></div></NavLink>
            <NavLink to="/covid"><div className="page-completed"></div></NavLink>
            <NavLink to="/insights"><div className="page-completed"></div></NavLink>
            <NavLink to="/submit"><div className="page-completed"></div></NavLink>
            <NavLink to={next}><div className="next"></div></NavLink>
        </nav>
    )
}

export default Navigation