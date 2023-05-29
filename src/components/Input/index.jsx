import { StyledInput, StyledP, Wrapper } from "./style";
import { forwardRef } from "react";

export const Input = forwardRef(({ id, error, ...rest }, ref) => {
	return (
		<>
			<Wrapper>
				<StyledInput id={id} error={error} ref={ref} {...rest} />
				{error && <StyledP>{error?.message}</StyledP>}
			</Wrapper>
		</>
	);
});
