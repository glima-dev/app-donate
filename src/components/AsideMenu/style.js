import styled from "styled-components";

export const AsideDiv = styled.aside`
	display: none;

	@media (min-width: 900px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		height: 100vh;
		gap: 40px;
		padding: 40px 30px 20px 30px;
		position: sticky;
		left: 0;
		top: 0;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
		background-color: var(--white100);
		z-index: 11;

		.headerAside {
			img {
				width: 172px;
				height: 80px;
			}
		}
	}
`;

export const ButtonDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 20px;

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

	> a {
		width: fit-content;
		color: var(--black100);
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-3);
		font-family: var(--font-family-1);
	}
`;

export const AsideFooter = styled.footer`
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin-bottom: 40px;

	.socialMedia {
		display: flex;
		gap: 20px;
		font-size: 15px;
		position: relative;
	}

	.socialMedia::after {
		content: "";
		position: absolute;
		bottom: -20px;
		width: 100%;
		height: 2px;
		background-color: #cac8c8;
	}

	.divContact {
		display: flex;
		flex-direction: column;
		gap: 10px;
		text-align: center;
	}
`;
