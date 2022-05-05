import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const MainWrapperStyled = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	height: 80.4rem;
	column-gap: 2rem;

  @media (min-width: ${breakpoints.DESKTOP_XL}px) {
		height: 110.4rem;
	}

  @media (max-width: ${breakpoints.DESKTOP_M}px) {
		height: 59.6rem;
	}
`;

export const MainContainerStyled = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 40px 0 0 40px;
`;
