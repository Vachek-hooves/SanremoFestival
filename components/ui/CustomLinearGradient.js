import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomLinearGradient = ({children}) => {
  return (
    <LinearGradient
      colors={['#E9DEF9', '#FBFCDD', '#C8CA9A']}
      style={styles.linearGradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      {children}
    </LinearGradient>
  );
};

export default CustomLinearGradient;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
