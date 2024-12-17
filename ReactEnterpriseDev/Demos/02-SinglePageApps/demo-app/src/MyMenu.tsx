import { NavLink } from "react-router-dom";
import "./MyMenu.css";

export default function Menu() {
    return (
		<nav>
			<NavLink to="/">Home</NavLink> &nbsp;|&nbsp;
			<NavLink to="/contact">Contact</NavLink> &nbsp;|&nbsp;
			<NavLink to="/about">About</NavLink> &nbsp;|&nbsp;
			<NavLink to="/products">Products</NavLink> &nbsp;|&nbsp;
			<NavLink to="/products-with-nested-routes">Products with nested routes</NavLink> &nbsp;|&nbsp;
			<NavLink to="/ts-and-cs">Terms and conditions</NavLink>
		</nav>
    )
}