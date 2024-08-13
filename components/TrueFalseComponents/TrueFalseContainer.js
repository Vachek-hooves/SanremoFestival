import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {COLOR} from '../../constant/colors';

const TrueFalseContainer = ({choosenAnswer, disabled}) => {
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => choosenAnswer(true)}
        disabled={disabled}>
        <Text style={[styles.btnText, {color: COLOR.true}]}>TRUE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => choosenAnswer(false)}
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
