import {ImageBackground} from 'react-native';

const ImagedBackground = ({children, style}) => {
  return (
    <ImageBackground
      style={[style, {flex: 1,padding:10}]}
      source={require('../../assets/img/bg/3.png')}>
      {children}
    </ImageBackground>
  );
};

export default ImagedBackground;
