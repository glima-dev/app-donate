import styled, { css } from "styled-components";

export const Label = styled.label`
	color: #999;
	font-weight: normal;
	opacity: 0.75;
	order: 1;
	position: absolute;
	font-size: 20px;
	top: -6px;
	padding: 0 10px;
	pointer-events: none;
	text-shadow: none;
	text-transform: capitalize;
	transform-origin: left top;
	transform: scale(1) translate3d(0, 18px, 0);
	transition: 0.3s ease-out;

	@media screen and (max-width: 1024px) {
		top: -9px;
	}
`;

export const StyledTextareaRegister = styled.textarea`
	outline: none;
	font-size: inherit;
	font-weight: var(--font-weight-3);
	width: 90%;
	border-bottom: 2px solid var(--black100);
	height: 100px;
	resize: none;
	line-height: inherit;

	&::placeholder {
		color: var(--black100);
	}

	${({ error }) => {
		if (error) {
			return css`
				animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
				transform: translate3d(0, 0, 0);
				backface-visibility: hidden;
				perspective: 1000px;

				@keyframes shake {
					10%,
					90% {
						transform: translate3d(-1px, 0, 0);
					}

					20%,
					80% {
						transform: translate3d(2px, 0, 0);
					}

					30%,
					50%,
					70% {
						transform: translate3d(-4px, 0, 0);
					}

					40%,
					60% {
						transform: translate3d(4px, 0, 0);
					}
				}

				::placeholder {
					color: red;
				}
			`;
		} else {
			return css`
				::placeholder {
					color: var(--black100);
					font-weight: var(--font-weight-2);
				}

				& :valid {
					::placeholder {
						color: transparent;
					}
				}
			`;
		}
	}}

	@media (min-width: 900px) {
		width: 100%;
		font-size: var(--font-size-2);
	}
`;

export const Wrapper = styled.fieldset`
	position: relative;
	width: 99%;
`;

export const StyledP = styled.p`
	color: red;
	font-weight: 700;
	text-align: left;
	margin-top: 10px;

	animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	transform: translate3d(0, 0, 0);
	backface-visibility: hidden;
	perspective: 1000px;

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
`;
