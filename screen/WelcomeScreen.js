import {Text, Animated} from 'react-native';
import {useEffect, useRef} from 'react';
import {ImagedBackground} from '../components/ui';
import MainContainerLayout from '../components/layout/MainContainerLayout';

const WelcomeScreen = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [animation]);
  return (
    <ImagedBackground>
      <MainContainerLayout>
        <Text>Enjoy Jorney to the Sanremo Festival Quiz</Text>
      </MainContainerLayout>
    </ImagedBackground>
  );
};

export default WelcomeScreen;
