import styled from "styled-components";
export const StyledEmptyCard = styled.div`
	border: solid 2px var(--primary200);
	border-radius: 6px;

	height: max-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	max-width: 1000px;

	padding: 40px;

	margin: 0px 40px 40px;
	height: 100px;

	h3 {
		color: var(--black100);
	}

	@media (min-width: 900px) {
		max-width: 960px;
		margin-right: 60px;
	}
`;
