import styled from 'styled-components';

export const NewCollectionContainerStyled = styled.div`
	width: 760px;
	padding: 20px;
	background-color: #f5f7f9;
	border-radius: 8px;

	@media (min-width: 2560px) {
		width: 1020px;
		height: 1104px;
	}

	@media (max-width: 1440px) {
		width: 480px;
		height: 596px;
	}
`;

export const NewCollectionImgWrapperStyled = styled.div<{color: string}>`
	height: 680px;
	svg {
		border-radius: 4px;
    fill: #${({ color }) => color};
	}

	@media (min-width: 2560px) {
		height: 980px;
	}

	@media (max-width: 1440px) {
		height: 472px;
	}
`;

export const NewCollectionTextWrapperStyled = styled.div`
	margin-top: 20px;
	text-transform: uppercase;
	color: #34334e;
`;
