import { Input } from "../../components/Input";
import logImage from "../../assets/img/loginImage.png";
import { ImageDiv, StyledLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginSchema } from "./loginSchema";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
	const { reqLogin } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(LoginSchema),
	});

	const loginForm = (data) => {
		reqLogin(data);
	};

	return (
		<>
			<StyledLogin>
				<ImageDiv>
					<img src={logImage} alt="" />
				</ImageDiv>
				<form onSubmit={handleSubmit(loginForm)}>
					<h1>ACESSE SUA CONTA</h1>
					<div className="form-div">
						<Input
							placeholder="Email"
							type="email"
							name="email"
							error={errors.email}
							{...register("email")}
						/>

						<Input
							placeholder="Senha"
							type="password"
							name="password"
							error={errors.password}
							{...register("password")}
						/>
						<Button name={"LOGIN"} size={"small"} style={"brand3"} />
					</div>

					<div className="questionDiv">
						<p>AINDA NÃO POSSUI UMA CONTA?</p>

						<Link to="/register" className="hoverUnderLineAnimation" href="">
							CADASTRE-SE AQUI
						</Link>
					</div>
				</form>
			</StyledLogin>
		</>
	);
};

export default Login;
