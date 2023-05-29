import styled from "styled-components";
import image from "../../../../assets/img/donatenow.png";

export const StyledHomeHeader = styled.section`
	.heroSection {
		background: url(${image});
		padding: 260px 0;
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;

		> h1 {
			font-family: var(--font-family-1);
			color: var(--white100);
			font-size: 60px;
			letter-spacing: 2.5008px;
		}

		> p {
			font-family: var(--font-family-1);
			color: var(--primary100);
			font-size: 20px;
			letter-spacing: 2.5008px;
		}
	}

	.statsSection {
		display: flex;
		flex-direction: column;
		padding: 25px;
		gap: 35px;
		background-color: var(--primary200);
	}

	.statsItem {
		display: flex;
		flex-direction: column;
		gap: 10px;

		> h2 {
			font-family: var(--font-family-2);
			font-size: 26px;
			font-weight: var(--font-weight-1);
			line-height: 29px;
			color: var(--primary100);
		}

		> h3 {
			font-family: var(--font-family-1);
			font-size: 56px;
			font-weight: var(--font-weight-3);
			line-height: 54px;
			color: var(--primary100);
		}
	}

	@media (min-width: 700px) {
		.heroSection {
			> h1 {
				font-family: var(--font-family-1);
				color: var(--white100);
				font-size: 80px;
				letter-spacing: 2.5008px;
			}

			> p {
				font-family: var(--font-family-1);
				color: var(--primary100);
				font-size: 24px;
				letter-spacing: 2.5008px;
			}
		}

		.statsSection {
			flex-direction: row;
			padding: 35px;
			gap: 20px;
			justify-content: space-evenly;
			align-items: center;
			background-color: var(--primary200);
		}
	}
`;
