import { useState, useContext, useEffect } from "react";
import logo from "./../../assets/logo.png";
import dropButton from "./../../assets/dropdownmenu.png";
import closeDropButton from "./../../assets/closedropmenu.png";
import { StyledHeader } from "./style";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
	const { pathname } = useLocation();
	const { login } = useContext(AuthContext);
	const [isActive, setIsActive] = useState(false);

	const showMenu = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		setIsActive(false);
	}, [pathname]);

	return (
		<StyledHeader>
			<div>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				{!isActive ? (
					<button onClick={showMenu}>
						<img src={dropButton} alt="menu" />
					</button>
				) : (
					<button onClick={showMenu}>
						<img src={closeDropButton} alt="closeMenu" />
					</button>
				)}
			</div>
			{isActive ? (
				<nav>
					<ul>
						<li>
							<NavLink to="/" className="hoverUnderLineAnimation">
								HOME
							</NavLink>
						</li>

						<li>
							<NavLink to="/register" className="hoverUnderLineAnimation">
								CADASTRE-SE
							</NavLink>
						</li>

						{!login && (
							<li>
								<NavLink to="/login" className="hoverUnderLineAnimation">
									FAÇA SEU LOGIN
								</NavLink>
							</li>
						)}

						{login && (
							<li>
								<NavLink to="/dashboard" className="hoverUnderLineAnimation">
									MINHA CONTA
								</NavLink>
							</li>
						)}
					</ul>
				</nav>
			) : null}
		</StyledHeader>
	);
};

export default Header;
