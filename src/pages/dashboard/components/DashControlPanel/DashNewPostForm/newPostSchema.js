import * as yup from "yup";

export const newPostSchema = yup.object().shape({
	title: yup
		.string()
		.required("O título é obrigatório")
		.min(3, "O nome precisa de pelo menos 3 caracteres")
		.max(60, "O nome pode ter no máximo 60 caracteres."),
	image: yup.string(),
	description: yup
		.string()
		.max(800, "Limite de 800 caracteres")
		.required("O conteúdo é obrigatório"),
});
