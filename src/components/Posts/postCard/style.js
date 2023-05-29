import styled from "styled-components";
export const StyledCard = styled.li`
	width: 280px;

	> p {
		display: block;
		display: -webkit-box;
		max-width: 50ch;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	@media (min-width: 900px) {
		width: 280px;
		> h2 {
			font-size: 20px;
		}
		> p {
			font-size: 10px;
		}
	}

	> h2 {
		margin-top: 13px;
		margin-bottom: 5px;

		color: var(--gray100);

		font-size: 1.25rem;
		font-weight: 400;
		line-height: 30px;
	}

	> p {
		color: var(--black100);
		font-family: var(--font-family-2);

		font-size: 0.7rem;
		font-weight: 400;
		line-height: 15px;
	}

	> img {
		width: 100%;
		height: 210px;
	}
`;
