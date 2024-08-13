import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLOR} from '../../constant/colors';
import {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TrueFalseContainer = ({
  choosenAnswer,
  disabled,
  correctAnswer,
  currentOption,
}) => {
  // const [selectedAnswer, setSelectedAnswer] = useState(null);
  // console.log('correct Answer-', correctAnswer);
  // console.log('selectedAnswer-', selectedAnswer);
  // console.log('current Option-', currentOption);
  // console.log('NEXT QUESTIONO');

  const handleAnswer = answer => {
    // setSelectedAnswer(answer);
    choosenAnswer(answer);
  };

  // const getButtonColor = answer => {
  //   if (selectedAnswer == null) {
  //     return COLOR.btnColor;
  //   } else if (answer == correctAnswer) {
  //     return COLOR.green;
  //   } else if (currentOption == null) {
  //     return COLOR.btnColor;
  //   } else {
  //     return COLOR.btnColor;
  //   }
  // };
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        onPress={() => handleAnswer(true)}
        style={[styles.btn, ]}
        disabled={disabled}>
        <Text style={[styles.btnText, {color: COLOR.true}]}>TRUE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // style={[styles.btn, {backgroundColor: getButtonColor(false)}]}
        style={[styles.btn]}
        onPress={() => handleAnswer(false)}
        disabled={disabled}>
        <Text style={[styles.btnText, {color: COLOR.red}]}>FALSE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrueFalseContainer;

const styles = StyleSheet.create({
  rootContainer: {flexDirection: 'row', marginTop: 50, gap: 40},
  btn: {
    flex: 1,
    backgroundColor: COLOR.btnColor,
    borderRadius: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    paddingVertical: 10,
  },
});
