import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const HotBidsBigCollectionContainerStyled = styled.div`
	width: 100%;
	padding: 2rem;
	background-color: #f5f7f9;
	border-radius: 8px;
	flex-grow: 1;
`;

export const HotBidsBigCollectionWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.2rem;
	height: 100%;
`;

export const HotBidsBigCollectionIconListStyled = styled.div`
	display: flex;
	flex-grow: 1;
	column-gap: 1.2rem;
	row-gap: 1.2rem;
	flex-wrap: wrap;
`;

export const HotBidsBigCollectionIconStyled = styled.div<{ color: string }>`
	width: 10.4rem;
	height: 9.6rem;

	svg {
		border-radius: 4px;
		fill: #${({ color }) => color};
	}
	display: block;

	@media (max-width: ${breakpoints.DESKTOP_XL - 1}px) {
		&:nth-child(5n) {
			display: none;
		}
		&:nth-last-child(-n + 5) {
			display: none;
		}
	}

	@media (min-width: 2560px) {
		width: 13.2rem;
		height: 12.9rem;
	}

	@media (max-width: ${breakpoints.DESKTOP_M}px) {
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
	height: 2.8rem;
	text-transform: uppercase;
	color: #34334e;
	font-size: 24px;
`;
