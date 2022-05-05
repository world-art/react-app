import React from 'react';
import { Author } from './Author';
import { AuthorsWrapperStyled } from './styled';
import { IAuthors } from './types';

export const Authors: React.FC<IAuthors> = ({ authors }) => (
	<AuthorsWrapperStyled>
		{authors.map((author, index) => (
			<Author key={index} color={author.color} position={index} />
		))}
	</AuthorsWrapperStyled>
);
