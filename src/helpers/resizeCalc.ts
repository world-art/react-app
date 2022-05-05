import { css } from 'styled-components';
import { breakpoints } from '../constants/breakpoints';

/** Функции для ресайза, которые перерасчитывают значение REM */
export const resizeCalc = css`

	@media (max-width: ${breakpoints.DESKTOP_M}px) {
		html {
			font-size: calc(9px + 1 * (100vw - 1280px) / 160);
		}
	}

	@media (min-width: ${breakpoints.DESKTOP_M + 1}px) and (max-width: ${breakpoints.DESKTOP_XL - 1}px) {
		html {
			font-size: calc(9px + 0.75 * (100vw - 1600px) / 240);
		}
	}

  @media (min-width: ${breakpoints.DESKTOP_XL}px) {
    html {
      font-size: calc(9px + 0.75 * (100vw - 2240px) / 240);
    }
  }
`;
