import React from 'react';
import { AuthorIconStyled } from './styled';
import { Svg } from '../../../images/svg';
import { IAuthor } from './types';

export const Author: React.FC<IAuthor> = ({ color, position }) => (
	<AuthorIconStyled color={color} position={position}>
		<Svg />
	</AuthorIconStyled>
);
