import {Text, TouchableOpacity, View} from 'react-native';
import MainContainerLayout from '../components/layout/MainContainerLayout';

const WelcomeScreen = ({navigation}) => {
  return (
    <MainContainerLayout>
      <View style={{flex: 1}}>
        <Text>Welcome screen</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainScreen')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>MAIN MENU</Text>
        </TouchableOpacity>
      </View>
    </MainContainerLayout>
  );
};

export default WelcomeScreen;