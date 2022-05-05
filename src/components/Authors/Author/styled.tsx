import styled from 'styled-components';

export const AuthorIconStyled = styled.div<{ color: string; position: number }>`
	position: absolute;
	z-index: ${({ position }) => `${100 - position}`};
	left: ${({ position }) => `${1.6 * position}rem`};
	opacity: 0.96;
	height: 2.4rem;
	svg {
		border: 1px solid #ffffff;
		border-radius: 100px;
		width: 2.4rem;
		height: 2.4rem;
		fill: #${({ color }) => color};
	}
`;
