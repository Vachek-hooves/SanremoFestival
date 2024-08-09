import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen, WelcomeScreen} from './screen';
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
            options={{animation: 'fade_from_bottom'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
