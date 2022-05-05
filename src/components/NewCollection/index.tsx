import React from 'react';
import { Authors } from '../Authors';
import { NewCollectionContainerStyled, NewCollectionImgWrapperStyled, NewCollectionTextWrapperStyled } from './styled';
import { Svg } from '../../images/svg';
import { INewCollection } from './types';
import { getRandomColor } from '../../helpers/getRandomColor'

export const NewCollection: React.FC<INewCollection> = ({ authors }) => (
	<NewCollectionContainerStyled>
		<NewCollectionImgWrapperStyled color={getRandomColor()}>
			<Svg />
		</NewCollectionImgWrapperStyled>
		<NewCollectionTextWrapperStyled>New collection</NewCollectionTextWrapperStyled>
		<Authors authors={authors} />
	</NewCollectionContainerStyled>
);
