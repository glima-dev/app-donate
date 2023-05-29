import styled from "styled-components";

export const StyledHeader = styled.div`
	@media (min-width: 900px) {
		display: none;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
	position: fixed;
	z-index: 5;

	> div {
		background-color: var(--white100);
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		padding: 15px;
		border-radius: 0 0 5px 5px;
	}

	img {
		width: 40px;
		height: 40px;
	}

	> nav {
		position: absolute;
		top: 60px;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: var(--white100);
		padding: 20px;
		animation: menuIn 1s linear;
		animation-duration: 0.5s;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 20px;

		a {
			width: fit-content;
			color: var(--black100);
			font-size: var(--font-size-2);
			font-weight: var(--font-weight-3);
			font-family: var(--font-family-1);
		}
	}

	.hoverUnderLineAnimation {
		display: inline-block;
		position: relative;
		color: black;
	}

	.hoverUnderLineAnimation::after {
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

	.hoverUnderLineAnimation:hover::after,
	.hoverUnderLineAnimation.active::after {
		transform: scaleX(1);
		margin-top: 10px;
		transform-origin: bottom left;
	}

	@keyframes menuIn {
		from {
			transform: translateX(150px);
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
