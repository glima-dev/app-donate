import { StyledRegister } from "./style";
import { Input } from "../../components/Input";
import logImage from "../../assets/img/registerImage.jpg";
import { ImageDiv } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "./registerSchema";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/Button";
import { TextareaRegister } from "../../components/TextareaRegister";

const Register = () => {
	const { reqRegister } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(RegisterSchema),
	});

	const registerForm = (data) => {
		reqRegister(data);
	};

	return (
		<StyledRegister>
			<ImageDiv>
				<img src={logImage} alt="" />
			</ImageDiv>
			<form action="" onSubmit={handleSubmit(registerForm)}>
				<h1>CADASTRE SUA ONG</h1>
				<div className="form-div">
					<Input
						placeholder="Nome"
						id="name"
						type="text"
						error={errors.name}
						{...register("name")}
					/>

					<Input
						placeholder="Email"
						id="email"
						type="email"
						error={errors.email}
						{...register("email")}
					/>
					<Input
						placeholder="Senha"
						id="password"
						type="password"
						error={errors.password}
						{...register("password")}
					/>

					<Input
						placeholder="Meta a alcançar em reais"
						id="number"
						type="text"
						error={errors.goal}
						{...register("goal")}
					/>

					<Input
						placeholder="Link da imagem"
						id="image"
						type="text"
						error={errors.image}
						{...register("image")}
					/>

					<TextareaRegister
						placeholder="Descrição"
						id="description"
						type="text"
						error={errors.description}
						{...register("description")}
					/>
				</div>

				<Button
					name={"CADASTRAR"}
					size={"small"}
					style={"brand3"}
					className="hover-underline-animation"
				/>
			</form>
		</StyledRegister>
	);
};
export default Register;
