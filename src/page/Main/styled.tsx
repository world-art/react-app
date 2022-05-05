import styled from 'styled-components';

export const MainWrapperStyled = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	height: 804px;
	column-gap: 20px;
	@media (min-width: 2560px) {
		height: 1104px;
	}

	@media (max-width: 1440px) {
		height: 596px;
	}
`;

export const MainContainerStyled = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 40px 0 0 40px;
`;
