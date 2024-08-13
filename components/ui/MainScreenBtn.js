import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLOR} from '../../constant/colors';
import {useNavigation} from '@react-navigation/native';

const MainScreenBtn = ({children, screen, complexity}) => {
  const navigation = useNavigation();
  function navigationHandler() {
    navigation.navigate(`${screen}`, complexity);
  }
  return (
    <TouchableOpacity onPress={navigationHandler} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MainScreenBtn;

const styles = StyleSheet.create({
  text: {fontWeight: '600', fontSize: 32, letterSpacing: 3, color: COLOR.ocean},
  container: {
    paddingHorizontal: 40,
    borderEndEndRadius: 40,
    borderStartStartRadius: 40,
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLOR.yellow + 90,
    marginVertical: 25,
    paddingVertical: 20,
  },
});
