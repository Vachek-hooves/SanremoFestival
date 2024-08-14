import MainContainerLayout from '../components/layout/MainContainerLayout';
import {
  BlurContainer,
  IconUser,
  ImagedBackground,
  MainScreenBtn,
} from '../components/ui';

const MainScreen = () => {
  return (
    <ImagedBackground>
      <BlurContainer blurAmount={2}>
        <IconUser />
        <MainContainerLayout
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <MainScreenBtn screen={'GameScreen'}>Game</MainScreenBtn>
          <MainScreenBtn>Gameplay</MainScreenBtn>
        </MainContainerLayout>
      </BlurContainer>
    </ImagedBackground>
  );
};

export default MainScreen;
