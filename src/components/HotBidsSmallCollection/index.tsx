import React from 'react';
import {
	HotBidsSmallCollectionContainerStyled,
	HotBidsSmallCollectionWrapperStyled,
	HotBidsSmallCollectionIconListStyled,
	HotBidsSmallCollectionIconStyled,
	HotBidsSmallCollectionTextStyled,
} from './styled';
import { Svg } from '../../images/svg';
import { IHotBidsSmall } from './types';

export const HotBidsSmallCollection: React.FC<IHotBidsSmall> = ({ iconList }) => (
	<HotBidsSmallCollectionContainerStyled>
		<HotBidsSmallCollectionWrapperStyled>
			<HotBidsSmallCollectionIconListStyled>
				{iconList.map((icon, index) => (
					<HotBidsSmallCollectionIconStyled color={icon.color} key={index}>
						<Svg />
					</HotBidsSmallCollectionIconStyled>
				))}
			</HotBidsSmallCollectionIconListStyled>
			<HotBidsSmallCollectionTextStyled>Hot bids</HotBidsSmallCollectionTextStyled>
		</HotBidsSmallCollectionWrapperStyled>
	</HotBidsSmallCollectionContainerStyled>
);
