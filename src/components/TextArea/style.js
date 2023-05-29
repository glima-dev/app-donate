import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
	width: 100%;
	height: 292px;
	border-top: solid 2px #000000;
	position: relative;
	display: flex;
	flex-direction: column;
	line-height: var(--line-height);
	transition: 0.5s ease-in-out;

	@media (min-width: 600px) {
		height: 232px;
	}

	> label {
		position: absolute;
		left: calc(50% - 32px);
		bottom: calc(100% - 10px);
		display: block;
		font-size: var(--font-size-5);
		font-family: var(--font-family-1);
		letter-spacing: 0.5px;
		font-weight: var(--font-weight-3);
		width: 64px;
		line-height: var(--line-height);
		background-color: var(--white100);
		text-align: center;
		transition: 0.5s ease-in-out;

		@media (min-width: 600px) {
			font-size: var(--font-size-4);
			left: calc(50% - 35px);
			width: 70px;
		}
	}

	> textarea {
		width: 100%;
		height: 260px;
		background-color: var(--primary200);
		border-radius: 4px;
		resize: none;
		margin-top: 32px;
		padding: 20px;
		font-size: var(--font-size-4);
		transition: 0.5s ease-in-out;
		outline: none;

		&::-webkit-scrollbar {
			height: 10px;
			width: 15px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: var(--primary100);
		}

		@media (min-width: 600px) {
			height: 200px;
		}
	}
`;
