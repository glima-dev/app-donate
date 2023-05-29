/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border-radius: 5px;
	transition: 0.4s;
	background-color: transparent;

	> span {
		line-height: inherit;
	}

	${({ buttonSize }) => {
		switch (buttonSize) {
			case "default":
				return css`
					padding-top: 4px;
					height: 30px;
					width: 34px;
					font-size: 24px;
					font-weight: var(--font-weight-1);
				`;
			case "medium":
				return css`
					height: 40px;
					font-size: var(--font-size-3);
					font-weight: var(--font-weight-3);
					width: max-content;
				`;
		}
	}}

	${({ buttonStyle }) => {
		switch (buttonStyle) {
			case "primaryDefault":
				return css`
					background: var(--primary200);
					border: 1.2px solid var(--primary100);
					color: var(--primary100);
					-webkit-box-shadow: 0px 0px 10px 0px rgba(255, 147, 112, 0.84);
					box-shadow: 0px 0px 10px 0px rgba(255, 147, 112, 0.84);

					&:hover {
						background: var(--primary100);
						border: 1.2px solid var(--white100);
						color: var(--white100);
					}
				`;

			case "primaryActive":
				return css`
					background: var(--primary100);
					border: 1.2px solid var(--white100);
					color: var(--white100);
					-webkit-box-shadow: 0px 0px 10px 0px rgba(255, 147, 112, 0.84);
					box-shadow: 0px 0px 10px 0px rgba(255, 147, 112, 0.84);

					&:hover {
						filter: brightness(0.9);
					}
				`;

			case "dashSubmit":
				return css`
					font-family: var(--font-family-1);
					letter-spacing: 0.1px;
					color: var(--black100);
					background-color: transparent;
					position: relative;
					overflow: hidden;

					&:hover:before {
						transform: translate(0);
					}

					&:after {
						content: "";
						transition: transform 0.4s cubic-bezier(0.33, 0.52, 0.05, 0.96);
						position: absolute;
						left: 0;
						bottom: 0;
						height: 3px;
						width: 100%;
						background-color: currentColor;
						transform: translate(0);
					}

					&:hover:after {
						transform: translate(100%);
						color: currentColor;
					}
				`;
		}
	}}
`;
