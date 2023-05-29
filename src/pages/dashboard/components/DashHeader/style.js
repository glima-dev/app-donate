import styled from "styled-components";
import image from "../../../../assets/img/img-dash-header-temp.svg";

export const StyledDashboardHeader = styled.header`
	width: 100%;
	height: 180px;
	background: url(${image});
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s ease-in-out;

	@media (min-width: 600px) {
		height: 230px;
	}

	@media (min-width: 900px) {
		height: 340px;
	}

	> div {
		> h1 {
			font-family: var(--font-family-1);
			color: var(--white100);
			font-size: var(--font-size-0);
			letter-spacing: 1.4px;
			margin-top: 60px;
			transition: 0.5s ease-in-out;

			@media (min-width: 600px) {
				font-size: calc(var(--font-title-0) * 1.2);
			}

			@media (min-width: 900px) {
				font-size: calc(var(--font-title-0) * 2);
				margin: 0;
			}
		}
	}
`;
