import React from 'react';
import { MainContainerStyled, MainWrapperStyled } from './styled';
import { NewCollection } from '../../components/NewCollection';
import { HotBids } from '../../components/HotBids';
import { getRandomColor } from '../../helpers/getRandomColor';

const authors = Array.from({ length: 3 }, _ => ({
	color: getRandomColor(),
}));

const iconList = {
	smallList: Array.from({ length: 3 }, _ => ({
		color: getRandomColor(),
	})),
	bigList: Array.from({ length: 25 }, _ => ({
		color: getRandomColor(),
	})),
};

export const Main: React.FC = () => (
	<MainContainerStyled>
		<MainWrapperStyled>
			<NewCollection authors={authors} />
			<HotBids iconList={iconList} />
		</MainWrapperStyled>
	</MainContainerStyled>
);
