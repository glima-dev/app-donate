import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
	name: yup.string().required("Nome é obrigatório"),
	email: yup
		.string()
		.email("Digite o email corretamente")
		.required("Email é obrigatório"),
	password: yup
		.string()
		.required("Senha obrigatória")
		.min(6, "Minimo de 6 caracteres"),
	goal: yup
		.string()
		.matches(/(^[0-9]*$)/, "Inserir apenas números")
		.required("Valor obrigatório"),
	image: yup.string().required("Insira uma link de imagem"),
	description: yup
		.string()
		.required("Insira uma breve descrição da ONG")
		.max(800, "Limite de 800 caracteres"),
});
