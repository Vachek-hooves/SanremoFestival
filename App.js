import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  GameScreen,
  MainScreen,
  TrueFalseGame,
  TrueFalseScreen,
  WelcomeScreen,
} from './screen';
import {AppProvider} from './store/app_context';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              // animation: 'fade_from_bottom',
              animation: 'fade',
              animationDuration: 200,
            }}
          />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="TrueFalseScreen" component={TrueFalseScreen} />
          <Stack.Screen name="TrueFalseGame" component={TrueFalseGame} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
