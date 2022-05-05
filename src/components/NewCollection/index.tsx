import React from 'react';
import { Authors } from '../Authors';
import { NewCollectionContainerStyled, NewCollectionImgWrapperStyled, NewCollectionTextWrapperStyled, NewCollectionWrapperStyled } from './styled';
import { Svg } from '../../images/svg';
import { INewCollection } from './types';
import { getRandomColor } from '../../helpers/getRandomColor';

export const NewCollection: React.FC<INewCollection> = ({ authors }) => (
	<NewCollectionContainerStyled>
		<NewCollectionWrapperStyled>
			<NewCollectionImgWrapperStyled color={getRandomColor()}>
				<Svg />
			</NewCollectionImgWrapperStyled>
			<NewCollectionTextWrapperStyled>New collection</NewCollectionTextWrapperStyled>
			<Authors authors={authors} />
		</NewCollectionWrapperStyled>
	</NewCollectionContainerStyled>
);
