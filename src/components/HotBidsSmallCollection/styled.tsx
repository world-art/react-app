import styled from 'styled-components';

export const HotBidsSmallCollectionContainerStyled = styled.div`
	width: 100%;
	padding: 20px;
	background-color: #f5f7f9;
	border-radius: 8px;
	height: 284px;

	@media (min-width: 2560px) {
		height: 312px;
	}

	@media (max-width: 1440px) {
		height: 292px;
	}
`;

export const HotBidsSmallCollectionWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 12px;
	height: 100%;
`;

export const HotBidsSmallCollectionIconListStyled = styled.div`
	display: flex;
	flex-grow: 1;
	column-gap: 12px;
`;

export const HotBidsSmallCollectionIconStyled = styled.div<{ color: string }>`
	svg {
		border-radius: 4px;
		fill: #${({ color }) => color};
	}

	&:last-child {
		display: none;
	}

	@media (min-width: 2560px) {
		&:last-child {
			display: block;
		}
	}

	@media (max-width: 1440px) {
		&:nth-child(2) {
			display: none;
		}
	}
`;

export const HotBidsSmallCollectionTextStyled = styled.div`
	height: 28px;
	text-transform: uppercase;
	color: #34334e;
`;
