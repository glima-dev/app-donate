import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/left-logo-dark.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { AsideDiv, AsideFooter, ButtonDiv } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AsideMenu = () => {
	const { login } = useContext(AuthContext);
	return (
		<AsideDiv>
			<div className="headerAside">
				<Link to="/">
					<img src={Logo} alt="" />
				</Link>
			</div>

			<ButtonDiv>
				<NavLink to="/" className="hoverUnderLineAnimation">
					HOME
				</NavLink>

				<NavLink to="/register" className="hoverUnderLineAnimation">
					CADASTRE-SE
				</NavLink>

				{!login && (
					<NavLink to="/login" className="hoverUnderLineAnimation">
						FAÇA SEU LOGIN
					</NavLink>
				)}

				{login && (
					<NavLink to="/dashboard" className="hoverUnderLineAnimation">
						MINHA CONTA
					</NavLink>
				)}
			</ButtonDiv>

			<AsideFooter>
				<div className="socialMedia">
					<FaFacebookF />
					<FaTwitter />
					<ImInstagram />
				</div>

				<div className="divContact">
					<p>(**)*******-**</p>
					<p>doGood@mail.com</p>
				</div>
			</AsideFooter>
		</AsideDiv>
	);
};

export default AsideMenu;
