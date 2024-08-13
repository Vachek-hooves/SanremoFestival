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
import {COLOR} from '../constant/colors';

const TrueFalseGame = ({route}) => {
  const {id, complexity} = route.params;
  const {requiredLevel} = useAppContext();
  const quizData = requiredLevel(complexity);
  const DATA = quizData.find(item => item.id === id);
  //   console.log(quizData);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [next, setNext] = useState(false);
  const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isAnswerModal, setIsAnswerModal] = useState(false);
  const [confirmAnswer, setConfirmAnswer] = useState(false);

  const allQuestions = DATA.query;
  const currentQuestion = allQuestions[currentIndex].question || '';
  const currentImage = allQuestions[currentIndex].image;
  const correctAnswer = allQuestions[currentIndex].answer;

  const validationHandler = choosen => {
    setCurrentOption(choosen);
    setCorrectOption(correctAnswer);
    setIsDisabled(true);
    setIsAnswerModal(true);
    if (choosen === correctAnswer) {
      setScore(score + 2);
      setCountCorrectAnswers(countCorrectAnswers + 1);
    }
    setNext(true);
    setConfirmAnswer(true);
  };

  const nextQuestionHanler = () => {
    if (currentIndex === allQuestions.length - 1) {
      setIsModal(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setCurrentOption(null);
      setCorrectOption(null);
      setIsDisabled(false);
      setNext(false);
      setIsAnswerModal(false);
    }
    setConfirmAnswer(false);
  };

  const playAgain = () => {
    setIsModal(false);
    setCurrentIndex(0);
    setCurrentOption(null);
    setCorrectOption(null);
    setIsDisabled(false);
    setScore(0);
    setIsAnswerModal(false);
    setCountCorrectAnswers(0);
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
          correctAnswer={correctAnswer}
          currentOption={currentOption}
        />
        <Modal visible={isModal} animationType="slide" transparent={true}>
          <TrueFalseModal
            restart={playAgain}
            id={id}
            complexity={complexity}
            score={score}
            countCorrectAnswers={countCorrectAnswers}
          />
        </Modal>
        {confirmAnswer && currentOption !== correctAnswer ? (
          <View style={styles.answerCheckContainer}>
            <Text style={{fontSize: 28, fontWeight: '700', color: COLOR.red}}>
              You answer is WRONG
            </Text>
            {next && <Next onPress={nextQuestionHanler} />}
          </View>
        ) : currentOption == correctAnswer ? (
          <View style={styles.answerCheckContainer}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '700',
                color: COLOR.yellow,
              }}>
              You answer is CORRECT
            </Text>
            {next && <Next onPress={nextQuestionHanler} />}
          </View>
        ) : null}
      </ScreenLayour>
    </CustomLinearGradient>
  );
};

export default TrueFalseGame;

const styles = StyleSheet.create({
  answerCheckContainer: {
    backgroundColor: COLOR.ocean + 90,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    bottom: '15%',
  },
});
