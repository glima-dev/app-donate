import styled from "styled-components";

export const StyledDashNewPostForm = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 88px;
	transition: 0.5s ease-in-out;

	@media (min-width: 600px) {
		width: 88%;
	}

	fieldset input {
		width: 100%;
	}

	fieldset input:focus {
		outline: none;
		width: 100%;
	}

	form {
		width: 100%;
		height: max-content;
		display: flex;
		flex-direction: column;
		gap: 22px;
		transition: 0.5s ease-in-out;

		& > div {
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

			& > fieldset input {
				border-bottom: 1.7px solid;
			}
		}

		@media (min-width: 600px) {
			& > fieldset input {
				width: 80%;
			}
		}
	}
`;
