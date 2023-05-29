import styled from "styled-components";

export const Container = styled.div`
	@media (min-width: 900px) {
		position: relative;
		width: 100%;
		display: grid;
		grid-template-columns: 300px calc(100% - 300px);
	}
`;
