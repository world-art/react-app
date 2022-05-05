import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const HotBidsContainerStyled = styled.div`
	width: 49.2rem;
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
  transition: width 0.5s, height 0.5s;

  @media (min-width: ${breakpoints.DESKTOP_XL}px) {
		width: 76rem;
		height: 110.4rem;
	}

	@media (max-width: ${breakpoints.DESKTOP_M}px) {
		width: 26rem;
		height: 59.6rem;
	}
`;
