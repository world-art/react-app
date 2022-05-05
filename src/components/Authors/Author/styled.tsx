import styled from 'styled-components';

export const AuthorIconStyled = styled.div<{ color: string; position: number }>`
	position: absolute;
	z-index: ${({ position }) => `${100 - position}`};
	left: ${({ position }) => `${16 * position}px`};
	opacity: 0.96;
	height: 24px;
	svg {
		border: 1px solid #ffffff;
		border-radius: 100px;
		width: 24px;
		height: 24px;
		fill: #${({ color }) => color};
	}
`;
