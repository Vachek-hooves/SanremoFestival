import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WelcomeScreen} from './screen';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
