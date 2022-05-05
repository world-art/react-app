import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const HotBidsSmallCollectionContainerStyled = styled.div`
	width: 100%;
	padding: 2rem;
	background-color: #f5f7f9;
	border-radius: 8px;
	height: 28.4rem;
`;

export const HotBidsSmallCollectionWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.2rem;
	height: 100%;
`;

export const HotBidsSmallCollectionIconListStyled = styled.div`
	display: flex;
	flex-grow: 1;
	column-gap: 1.2rem;
`;

export const HotBidsSmallCollectionIconStyled = styled.div<{ color: string }>`
	svg {
		border-radius: 4px;
		fill: #${({ color }) => color};
	}

	&:last-child {
		display: none;
	}

  @media (min-width: ${breakpoints.DESKTOP_XL}px) {
		&:last-child {
			display: block;
		}
	}

	@media (max-width: ${breakpoints.DESKTOP_M}px) {
		&:nth-child(2) {
			display: none;
		}
	}
`;

export const HotBidsSmallCollectionTextStyled = styled.div`
  height: 2.8rem;
	text-transform: uppercase;
	color: #34334e;
  font-size: 24px;
`;
