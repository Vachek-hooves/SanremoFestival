import {StyleSheet, View, Dimensions} from 'react-native';
import {
  BlurContainer,
  IconGoBack,
  ImagedBackground,
  MainScreenBtn,
} from '../components/ui';
import MainContainerLayout from '../components/layout/MainContainerLayout';

const {height} = Dimensions.get('window');

const GameScreen = () => {
  return (
    <ImagedBackground style={{padding: 5}}>
      {/* <BlurContainer blurAmount={5}> */}
      {/* <CustomLinearGradient> */}
      <MainContainerLayout
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <MainScreenBtn screen={'TrueFalseScreen'} complexity={'easy'}>
          True False (easy)
        </MainScreenBtn>
        <MainScreenBtn screen={'TrueFalseScreen'} complexity={'hard'}>
          True False (hard)
        </MainScreenBtn>
        <MainScreenBtn screen={'QuizScreen'}>Quiz</MainScreenBtn>
      </MainContainerLayout>
      {/* </CustomLinearGradient> */}
      <View
        style={{
          position: 'absolute',
          bottom: 60,
          right: 70,
        }}>
        <IconGoBack />
      </View>
      {/* </BlurContainer> */}
    </ImagedBackground>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
