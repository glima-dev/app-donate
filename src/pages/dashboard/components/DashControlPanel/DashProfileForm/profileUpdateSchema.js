import * as yup from "yup";

export const profileUpdateSchema = yup.object().shape({
	name: yup
		.string()
		.required("O nome é obrigatório")
		.min(3, "O nome precisa de pelo menos 3 caracteres")
		.max(60, "O nome pode ter no máximo 60 caracteres."),
	goal: yup
		.string()
		.matches(/(^[0-9]*$)/, "Inserir apenas números")
		.required("Valor obrigatório"),
	password: yup
		.string()
		.required("A senha é obrigatória")
		.min(6, "É necessário uma senha de pelos 6 caracteres"),
	image: yup.string().required("Insira uma link de imagem"),
	description: yup
		.string()
		.required("Insira uma breve descrição da ONG")
		.max(1500, "Limite de 1.500 caracteres"),
});
