import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const fontGameScreen = () => {
  if (width < 410) {
    return 26;
  } else {
    return 32;
  }
};
