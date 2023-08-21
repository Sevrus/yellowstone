import {NavLink} from "react-router-dom";

const HeaderMenu = () => {

    const getNavLinkClassName = ({ isActive, isPending }) => {
        if (isPending) {
            return "pending";
        } else if (isActive) {
            return "active-link";
        } else {
            return "";
        }
    }

    return(
        <nav className="header-menu">
            <NavLink to="/" className={getNavLinkClassName}>accueil</NavLink>
            <NavLink to="/lore" className={getNavLinkClassName}>lore</NavLink>
            <NavLink to="/reglement" className={getNavLinkClassName}>reglement</NavLink>
            <NavLink to="/lois" className={getNavLinkClassName}>lois</NavLink>
            <NavLink to="/galerie" className={getNavLinkClassName}>galerie</NavLink>
            <NavLink to="/carte" className={getNavLinkClassName}>carte</NavLink>
            <NavLink to="/contact" className={getNavLinkClassName}>contact</NavLink>
        </nav>
    );
};

export default HeaderMenu;