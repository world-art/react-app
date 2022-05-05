import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const NewCollectionContainerStyled = styled.div`
	width: 76rem;
	padding: 2rem;
	background-color: #f5f7f9;
	border-radius: 8px;
	transition: width 0.5s, height 0.5s;

	@media (min-width: ${breakpoints.DESKTOP_XL}px) {
		width: 102rem;
		height: 110.4rem;
	}

	@media (max-width: ${breakpoints.DESKTOP_M}px) {
		width: 48rem;
		height: 59.6rem;
	}
`;

export const NewCollectionWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
  row-gap: 1.2rem;
  height: 100%;
`;

export const NewCollectionImgWrapperStyled = styled.div<{ color: string }>`
	flex-grow: 1;
	svg {
		border-radius: 4px;
		fill: #${({ color }) => color};
	}

  @media (min-width: ${breakpoints.DESKTOP_XL}px) {
		height: 98rem;
	}

  @media (max-width: ${breakpoints.DESKTOP_M}px) {
		height: 47.2rem;
	}
`;

export const NewCollectionTextWrapperStyled = styled.div`
	text-transform: uppercase;
	color: #34334e;
	font-size: 24px;
`;
