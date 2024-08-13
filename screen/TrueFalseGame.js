import {
  Image,
  InteractionManager,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState, useEffect} from 'react';
import {CustomLinearGradient, ScreenLayour} from '../components/ui';
import {
  ImageRender,
  Next,
  Question,
  QuestionCounter,
  TopicBox,
  TrueFalseContainer,
  TrueFalseModal,
} from '../components/TrueFalseComponents';
import {useAppContext} from '../store/app_context';

const TrueFalseGame = ({route}) => {
  const {id, complexity} = route.params;
  const {requiredLevel} = useAppContext();
  const quizData = requiredLevel(complexity);
  const DATA = quizData.find(item => item.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrectOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [next, setNext] = useState(false);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const allQuestions = DATA.query;
  const currentQuestion = allQuestions[currentIndex].question || '';
  const currentImage = allQuestions[currentIndex].image;
  const correctAnswer = allQuestions[currentIndex].answer;

  const validationHandler = choosen => {
    const correct = correctAnswer;
    setCurrectOption(choosen);
    setCorrectOption(correct);
    setIsDisabled(true);
    if (choosen === correct) {
      setScore(score + 2);
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }
    setNext(true);
  };

  const nextQuestionHanler = () => {
    console.log(currentIndex, allQuestions.length - 1);
    if (currentIndex === allQuestions.length - 1) {
      setIsModal(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setCurrectOption(null);
      setCorrectOption(null);
      setIsDisabled(false);
      setNext(false);
    }
  };

  const playAgain = () => {
    setIsModal(false);
    setCurrentIndex(0);
    setCurrectOption(null);
    setCorrectOption(null);
    setIsDisabled(false);
    setScore(0);
  };

  return (
    <CustomLinearGradient>
      <ScreenLayour style={{alignItems: 'center'}}>
        <TopicBox topic={DATA.topic} />
        <QuestionCounter
          score={score}
          questionNum={currentIndex + 1}
          totalQuestions={allQuestions.length}
          correctAnswer={countCorrectAnswers}
          complexity={complexity}
        />
        <ImageRender image={currentImage} />
        <Question question={currentQuestion} />
        <TrueFalseContainer
          choosenAnswer={validationHandler}
          disabled={isDisabled}
        />
        {next && <Next onPress={nextQuestionHanler} />}
        <Modal visible={isModal} animationType="slide" transparent={true}>
          <TrueFalseModal
            restart={playAgain}
            id={id}
            complexity={complexity}
            score={score}
          />
        </Modal>
      </ScreenLayour>
    </CustomLinearGradient>
  );
};

export default TrueFalseGame;

const styles = StyleSheet.create({});
