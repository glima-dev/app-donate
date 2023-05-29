import { BiEditAlt } from "react-icons/bi";
import { Input } from "../../../../../components/Input";
import { StyledButton } from "../../../../../styles/buttons";
import { StyledDashProfileForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { profileUpdateSchema } from "./profileUpdateSchema";
import Textarea from "../../../../../components/TextArea";
import { useContext, useState } from "react";
import { DashContext } from "../../../../../context/DashContext";
import { AuthContext } from "../../../../../context/AuthContext";

const DashProfileForm = () => {
	const [editActive, setEditActive] = useState(true);
	const [loadingUpdateUser, setLoadingUpdateUser] = useState(false);
	const { getUsers } = useContext(AuthContext);
	const { updateUser, currentUser } = useContext(DashContext);

	const unlockEditProfile = () => {
		setEditActive(!editActive);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		resolver: yupResolver(profileUpdateSchema),
	});

	const submit = (data) => {
		updateUser(data, setLoadingUpdateUser);
		getUsers();
	};

	return (
		<StyledDashProfileForm block={editActive}>
			<StyledButton
				buttonSize="default"
				buttonStyle={!editActive ? "primaryActive" : "primaryDefault"}
				onClick={unlockEditProfile}
			>
				<span>
					<BiEditAlt />
				</span>
			</StyledButton>

			<form noValidate onSubmit={handleSubmit(submit)}>
				<div>
					<div>
						<Input
							placeholder="Nome"
							id="name"
							type="text"
							error={errors.name}
							defaultValue={currentUser?.name}
							{...register("name")}
						/>
						<Input
							placeholder="Meta"
							id="goal"
							type="text"
							error={errors.goal}
							defaultValue={currentUser?.goal}
							{...register("goal")}
						/>
					</div>

					<div>
						<Input
							placeholder="Confirme a sua senha"
							id="password"
							type="password"
							error={errors.password}
							defaultValue=""
							{...register("password")}
						/>
						<Input
							placeholder="Link da imagem"
							id="image"
							type="text"
							error={errors.image}
							defaultValue={currentUser?.image}
							{...register("image")}
						/>
					</div>
				</div>
				<Textarea
					placeholder="Fale sobre sua instituição"
					id="description"
					label="SOBRE"
					error={errors.description}
					defaultValue={currentUser?.description}
					{...register("description")}
				/>
				<StyledButton
					type="submit"
					buttonSize="medium"
					buttonStyle="dashSubmit"
				>
					ATUALIZAR INFORMAÇÕES
				</StyledButton>
			</form>
		</StyledDashProfileForm>
	);
};

export default DashProfileForm;
