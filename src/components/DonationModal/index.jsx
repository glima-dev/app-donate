import { useContext } from "react";
import { StyledDonationModal } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { Input } from "../Input";
import { donateSchema } from "./donationSchema";

const DonationModal = ({ openModal, setShowModal, user }) => {
	const { getDonations } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(donateSchema),
	});

	const donate = async (data) => {
		try {
			const response = await toast.promise(api.post("/donations", data), {
				pending: "Estamos realizando a doação...",
				success: "Doação realizada com sucesso!",
				error: "Ops! Sua doação não pode ser efetuada",
			});
			getDonations();
			setShowModal(false);
		} catch (error) {
			console.error(error);
		} finally {
		}
	};

	return (
		<StyledDonationModal>
			<div className="modalWrapper">
				<div className="headerContainer">
					<div className="titleContainer">
						<h1 className="title">{user.name.toUpperCase()}</h1>
					</div>
					<button className="closeButton" onClick={openModal}>
						X
					</button>
				</div>
				<h2 className="descriptionContainer">Formulário de doação</h2>
				<form
					onSubmit={handleSubmit(donate)}
					className="donationForm"
					action=""
					noValidate
				>
					<input hidden name="id" value={user.id} {...register("userId")} />
					<Input
						type="text"
						placeholder="Nome"
						name="name"
						{...register("name")}
						error={errors}
					/>

					<Input
						type="text"
						placeholder="Telefone"
						name="phone"
						{...register("phone")}
						error={errors}
					/>

					<Input
						type="number"
						placeholder="Quanto deseja doar?"
						name="raised"
						{...register("raised")}
						error={errors}
					/>

					<Input
						type="text"
						placeholder="E-mail"
						name="email"
						{...register("email")}
						error={errors}
					/>

					<Input
						type="text"
						placeholder="Número do cartão"
						name="card"
						{...register("card")}
						error={errors}
					/>

					<div className="cardInput">
						<Input
							type="text"
							placeholder="MM/YY"
							name="date"
							{...register("date")}
							error={errors}
						/>

						<Input type="text" placeholder="CVC" {...register("cvc")} />
					</div>
					<button type="submit" className="donationButton">
						DOAR AGORA
					</button>
				</form>
			</div>
		</StyledDonationModal>
	);
};

export default DonationModal;
