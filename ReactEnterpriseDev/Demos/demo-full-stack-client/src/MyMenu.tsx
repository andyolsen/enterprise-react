import { NavLink } from "react-router-dom";
import "./MyMenu.css";

export default function Menu() {
    return (
		<nav>
			<NavLink to="/">Home</NavLink> &nbsp;|&nbsp;
			<NavLink to="/destinations">Destinations</NavLink> &nbsp;|&nbsp;
			<NavLink to="/about">About</NavLink>
		</nav>
    )
}