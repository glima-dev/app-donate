import styled from "styled-components";

export const StyledHomeContact = styled.section`
	display: flex;
	flex-direction: column;
	gap: 50px;
	font-family: var(--font-family-2);
	color: var(--black100);
	padding-top: 50px;
	padding-bottom: 50px;

	.contactMap {
		height: 400px;
	}

	.contactText {
		display: flex;
		padding-left: 16px;
		flex-direction: column;
		gap: 16px;
		padding-top: 32px;

		> h2 {
			font-family: var(--font-family-1);
			font-size: var(--font-size-0);
		}

		> span {
			font-size: var(--font-size-5);
		}

		> form {
			padding-top: 32px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 24px;

			> input,
			textarea {
				outline: none;
				font-weight: var(--font-weight-2);
				width: 90%;
				border-bottom: 2px solid var(--black100);
			}

			> textarea {
				height: 150px;
				resize: none;
			}

			> button {
				display: inline-block;
				position: relative;
				cursor: pointer;
				font-family: var(--font-family-1);
				font-size: var(--font-size-2);
				background: none;

				&::after {
					content: "";
					position: absolute;
					width: 100%;
					transform: scaleX(0);
					height: 3px;
					bottom: 0;
					top: 12px;
					left: 0;
					margin-top: 10px;
					background-color: black;
					transform-origin: bottom right;
					transition: transform 0.25s ease-out;
				}

				&:hover::after {
					transform: scaleX(1);
					margin-top: 10px;
					transform-origin: bottom left;
				}
			}
		}
	}

	@media (min-width: 900px) {
		flex-direction: row;

		.contactMap {
			width: 50%;
			height: 100%;
		}

		.contactText {
			width: 50%;
			margin: auto 0;
			padding-left: 0px;

			> form {
				> input,
				textarea {
					font-weight: var(--font-weight-2);
					border-bottom: 2px solid var(--black100);
				}
			}
		}
	}
`;
