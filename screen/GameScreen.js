import {StyleSheet, Text, View} from 'react-native';
import {
  BlurContainer,
  CustomLinearGradient,
  ImagedBackground,
  MainScreenBtn,
  ScreenLayour,
} from '../components/ui';
import MainContainerLayout from '../components/layout/MainContainerLayout';

const GameScreen = () => {
  return (
    <ImagedBackground>
      <BlurContainer>
        {/* <CustomLinearGradient> */}
        <MainContainerLayout
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <MainScreenBtn screen={'TrueFalseScreen'} complexity={'easy'}>
            True False (easy)
          </MainScreenBtn>
          <MainScreenBtn screen={'TrueFalseScreen'} complexity={'hard'}>
            True False (hard)
          </MainScreenBtn>
          <MainScreenBtn>Quiz</MainScreenBtn>
        </MainContainerLayout>
        {/* </CustomLinearGradient> */}
      </BlurContainer>
    </ImagedBackground>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
