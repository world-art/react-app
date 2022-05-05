import styled from 'styled-components';

export const HotBidsContainerStyled = styled.div`
	width: 492px;
	display: flex;
	flex-direction: column;
	row-gap: 20px;

	@media (min-width: 2560px) {
		width: 760px;
		height: 1104px;
	}

	@media (max-width: 1440px) {
		width: 260px;
		height: 596px;
	}
`;
