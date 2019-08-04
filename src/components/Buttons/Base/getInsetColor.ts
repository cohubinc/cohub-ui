import lowerFirst from 'lodash/lowerFirst';
import findKey from 'lodash/findKey';

import Color from '../../../definitions/enums/Color';
import logError from '../../../utils/logError';

// Calculate the inset color by finding the background color then dropping down two color shades
export function getInsetColor(backgroundColor: Color) {
  try {
    const color = findKey(Color, value => backgroundColor === value) as string;

    const colorLevel = color.replace(/^\D+/g, '');
    const colorName = lowerFirst(color.split(colorLevel).filter(n => n)[0]);
    const insetColorLevel = parseInt(colorLevel) - 200;
    const insetColorName = `${colorName}${insetColorLevel}`;
    const insetColorValue = Color[insetColorName as any];

    if (!insetColorValue) {
      logError(`Please add ${insetColorName} to Color Enum`);
    }

    return insetColorValue;
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      throw err;
    } else {
      console.error(err.message);
    }

    return 'transparent';
  }
}
