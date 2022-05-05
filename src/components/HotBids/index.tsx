import React from 'react';
import { HotBidsSmallCollection } from '../HotBidsSmallCollection';
import { HotBidsBigCollection } from '../HotBidsBigCollection';
import { HotBidsContainerStyled } from './styled';
import { IHotBids } from './types';

export const HotBids: React.FC<IHotBids> = ({ iconList }) => (
	<HotBidsContainerStyled>
		<HotBidsSmallCollection iconList={iconList.smallList} />
		<HotBidsBigCollection iconList={iconList.bigList} />
	</HotBidsContainerStyled>
);
