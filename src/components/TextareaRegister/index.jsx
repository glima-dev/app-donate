import { StyledTextareaRegister, StyledP, Wrapper } from "./style";
import { forwardRef } from "react";

export const TextareaRegister = forwardRef(
	({ type, id, error, label, ...rest }, ref) => {
		return (
			<>
				<Wrapper>
					<StyledTextareaRegister
						type={type}
						error={error}
						id={id}
						ref={ref}
						{...rest}
					/>
					{error && <StyledP>{error.message}</StyledP>}
				</Wrapper>
			</>
		);
	}
);
