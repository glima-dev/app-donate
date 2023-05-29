import { StyledButton } from "./style";
export const Button = ({ type, name, size, style, click, idPost }) => {
	return (
		<StyledButton
			type={type}
			buttonSize={size}
			buttonStyle={style}
			onClick={click}
			id={idPost}
		>
			{name.toUpperCase()}
		</StyledButton>
	);
};
