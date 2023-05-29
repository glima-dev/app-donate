import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastify = styled(ToastContainer)`
	&&&.Toastify__toast-container {
		width: 100%;

		@media (min-width: 900px) {
			width: fit-content;
		}
	}

	.Toastify__toast {
		background-color: var(--primary200);
		color: var(--primary100);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-3);
		font-family: var(--font-family-1);
		letter-spacing: 0.5px;
	}
`;
