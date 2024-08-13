import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../constant/colors';

const Question = ({question}) => {
  return (
    <View style={{height:120}}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 24,
          textAlign: 'center',
          color: COLOR.ocean,
        }}>
        {question}
      </Text>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({});
