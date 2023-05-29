import styled from "styled-components";

export const StyledDashProfileForm = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 88px;

	fieldset input,
	textarea,
	fieldset {
		width: 100%;
	}

	fieldset input,
	textarea,
	fieldset,
	button:last-child {
		pointer-events: ${({ block }) => (block ? "none" : "auto")};
		color: ${({ block }) => (block ? "#828282" : "black")};
		border-color: ${({ block }) => (block ? "#828282" : "black")};
	}

	textarea::placeholder {
		color: ${({ block }) => (block && "#828282")};
	}

	input::placeholder {
		color: ${({ block }) => (block && "#828282")};
	}

	fieldset input:focus {
		outline: none;
		width: 100%;
	}

	button {
		align-self: flex-end;
		margin-bottom: 8px;

		@media (min-width: 500px) {
			margin-bottom: 16px;
		}
	}

	form {
		width: 100%;
		height: max-content;
		display: flex;
		flex-direction: column;
		gap: 32px;
		transition: 0.5s ease-in-out;

		& > div:nth-child(1) {
			width: 100%;
			height: max-content;
			display: flex;
			flex-direction: column;
			margin-bottom: 18px;
			gap: 16px;
			transition: 0.5s ease-in-out;

			@media (min-width: 600px) {
				flex-direction: row;
				justify-content: space-between;
				gap: 72px;
			}

			& > div {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 16px;

				@media (min-width: 600px) {
					max-width: 480px;
				}

				fieldset {
					width: 100%;
					height: max-content;
				}
			}
		}
	}
`;
