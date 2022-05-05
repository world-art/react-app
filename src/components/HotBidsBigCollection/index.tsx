import React from 'react';
import {
	HotBidsBigCollectionContainerStyled,
	HotBidsBigCollectionWrapperStyled,
	HotBidsBigCollectionIconListStyled,
	HotBidsBigCollectionIconStyled,
	HotBidsBigCollectionTextStyled,
} from './styled';
import { Svg } from '../../images/svg';
import { IHotBidsBig } from './types';

export const HotBidsBigCollection: React.FC<IHotBidsBig> = ({ iconList }) => (
	<HotBidsBigCollectionContainerStyled>
		<HotBidsBigCollectionWrapperStyled>
			<HotBidsBigCollectionIconListStyled>
				{iconList.map((icon, index) => (
					<HotBidsBigCollectionIconStyled color={icon.color} key={index}>
						<Svg />
					</HotBidsBigCollectionIconStyled>
				))}
			</HotBidsBigCollectionIconListStyled>
			<HotBidsBigCollectionTextStyled>Hot bids</HotBidsBigCollectionTextStyled>
		</HotBidsBigCollectionWrapperStyled>
	</HotBidsBigCollectionContainerStyled>
);
