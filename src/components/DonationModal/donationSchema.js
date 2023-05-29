import * as yup from "yup";

export const donateSchema = yup.object().shape({
	name: yup.string().required("Preencha o nome."),
	raised: yup
		.number("Digite um número")
		.required("Preencha o valor.")
		.positive("O valor deve ser positivo"),
});
