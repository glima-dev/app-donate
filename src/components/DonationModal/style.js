import styled from "styled-components";

export const StyledDonationModal = styled.div`
	background-color: RGBA(0, 0, 0, 0.4);
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 20;
	top: auto;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	.modalWrapper {
		background-color: #ffffff;
		width: 696px;
		height: 90%;
		overflow-y: auto;
		overflow-x: hidden;
		margin: 20px 18px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.headerContainer {
		margin: 30px 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
	}
	.titleContainer {
		display: flex;
		justify-content: center;
		width: 100%;
		color: var(--gray100);
		font-family: var(--font-family-1);
		font-weight: var(--font-weight-3);
		font-size: var(--font-size-1);
		line-height: 39px;
	}
	.closeButton {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 30px;
		background-color: green;
		border: 1px solid var(--primary100);
		border-radius: 5px;
		background-color: var(--primary200);
		color: var(--primary100);
	}
	.descriptionContainer {
		width: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80px;
		background-color: var(--primary200);
		color: var(--primary100);
		border-radius: 10px;
	}
	.donationForm {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px 40px;
		padding: 20px;
		/* flex-wrap: wrap; */
		/* justify-content: space-between; */
		width: 100%;
		/* height: 300px; */
	}
	> input {
		display: block;
		color: var(--gray100);
		width: 100%;
		height: 50px;
		font-family: var(--font-family-2);
		font-weight: var(--font-weight-3);
		font-size: var(--font-size-5);
		line-height: 20px;
		border-bottom: 2px solid var(--gray100);
	}
	.cardInput {
		width: 100%;
		gap: 10px;
		display: flex;
		> input {
			width: 50%;
		}
	}
	.donationButton {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-column: 1/-1;
		width: 100%;
		height: 74px;
		background-color: var(--primary100);
		color: #ffffff;
		font-family: var(--font-family-1);
		font-weight: var(--font-weight-3);
		font-size: 20px;
		line-height: 30px;
		border-radius: 10px;
		margin-top: 5px;
	}

	@media (min-width: 900px) {
		.modalWrapper {
			height: fit-content;
			max-height: 90vh;
		}
		.donationForm {
			grid-template-columns: 1fr 1fr;
		}
	}
`;
