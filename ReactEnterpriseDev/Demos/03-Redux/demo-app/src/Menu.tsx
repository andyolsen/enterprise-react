import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
    return (
		<nav>
			<NavLink to="/">Home</NavLink>&nbsp;|&nbsp;
			<NavLink to="/counter">Counter</NavLink>&nbsp;|&nbsp;
			<NavLink to="/products">Products</NavLink>
		</nav>
    )
}