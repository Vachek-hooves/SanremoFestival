import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {COLOR} from '../../constant/colors';
import {BlurContainer, ScreenLayour} from '../ui';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../../store/app_context';

const QuizModalResult = ({
  restart,
  id,
  complexity,
  score,
  correctAnswer,
  countCorrectAnswers,
  topic,
}) => {
  const navigation = useNavigation();
  const {unlockQuizNextLevel} = useAppContext();

  const openNextLevelFn = () => {
    unlockQuizNextLevel(id);
    navigation.navigate('QuizScreen');
  };
  return (
    <BlurContainer blurAmount={9}>
      <ScreenLayour style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>Yuo play "{topic}"</Text>
        <View>
          <Text style={styles.text}>
            To pass this level you need more then 8 correct answers
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10, marginVertical: 20}}>
          <TouchableOpacity onPress={restart} style={styles.btn}>
            <Text style={styles.btnText}>restart</Text>
          </TouchableOpacity>
          {score > 1 && (
            <TouchableOpacity onPress={openNextLevelFn} style={styles.btn}>
              <Text style={styles.btnText}>Next Level</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScreenLayour>
    </BlurContainer>
  );
};

export default QuizModalResult;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: COLOR.ocean,
    fontWeight: '600',
    fontSize: 26,
    marginVertical: 10,
  },
  btn: {backgroundColor: COLOR.green, flex: 1, borderRadius: 10},
  btnText: {textAlign: 'center', fontSize: 22, color: COLOR.ocean, padding: 5},
});
