import styled from "styled-components";
export const StyledModalDiv = styled.div`
	background-color: var(--white100);
	width: fit-content;
	max-width: 600px;
	height: fit-content;
	max-height: 90%;
	margin: 20px 18px;
	border-radius: 6px;
	overflow: hidden;
	overflow-y: auto;
	font-family: var(--font-family-1);
	position: relative;

	> img {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}

	> button:first-child {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 30px;
		height: 30px;

		border: solid 1px var(--primary100);
		background-color: var(--primary200);
		color: var(--primary100);
		border-radius: 6px;

		font-size: 16px;
		font-weight: 600;
	}

	> section {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 18px;

		> h2 {
			font-size: var(--font-size-1);
		}

		> p {
			font-family: var(--font-family-2);
		}
	}

	@media (min-width: 900px) {
		width: 600px;
		height: fit-content;

		> button:first-child {
			right: 10px;
		}
	}
`;
export const StyledModalBackgroud = styled.div`
	background-color: RGBA(0, 0, 0, 0.4);
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 20;
	display: flex;
	justify-content: center;
	align-items: center;
`;
