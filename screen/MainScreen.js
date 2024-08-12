import MainContainerLayout from '../components/layout/MainContainerLayout';
import {BlurContainer, ImagedBackground, MainScreenBtn} from '../components/ui';

const MainScreen = () => {
  return (
    <ImagedBackground>
      <BlurContainer blurAmount={3}>
        <MainContainerLayout
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <MainScreenBtn screen={'GameScreen'}>Game</MainScreenBtn>
          <MainScreenBtn>Gameplay</MainScreenBtn>
          <MainScreenBtn>Profile</MainScreenBtn>
        </MainContainerLayout>
      </BlurContainer>
    </ImagedBackground>
  );
};

export default MainScreen;
