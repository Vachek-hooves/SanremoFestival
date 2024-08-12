import {ImageBackground} from 'react-native';

const ImagedBackground = ({children}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/img/bg/Sanremo.jpg')}>
      {children}
    </ImageBackground>
  );
};

export default ImagedBackground;
