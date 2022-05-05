import styled from 'styled-components';

export const HotBidsBigCollectionContainerStyled = styled.div`
	width: 100%;
	padding: 20px;
	background-color: #f5f7f9;
	border-radius: 8px;
	flex-grow: 1;
`;

export const HotBidsBigCollectionWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 12px;
	height: 100%;
`;

export const HotBidsBigCollectionIconListStyled = styled.div`
	display: flex;
	flex-grow: 1;
	column-gap: 12px;
	row-gap: 12px;
	flex-wrap: wrap;
`;

export const HotBidsBigCollectionIconStyled = styled.div<{ color: string }>`
	width: 132px;
	height: 129px;

	svg {
		border-radius: 4px;
		fill: #${({ color }) => color};
	}
	display: block;

	@media (max-width: 2560px) {
		width: 104px;
		height: 96px;
		&:nth-child(5n) {
			display: none;
		}
		&:nth-last-child(-n + 5) {
			display: none;
		}
	}

	@media (max-width: 1440px) {
		& {
			display: none;
		}
		&:nth-child(-n + 2) {
			display: block;
		}
		&:nth-child(6) {
			display: block;
		}
		&:nth-child(7) {
			display: block;
		}
	}
`;

export const HotBidsBigCollectionTextStyled = styled.div`
	height: 28px;
	text-transform: uppercase;
	color: #34334e;
`;
