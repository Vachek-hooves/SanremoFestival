import {useRef, useState, useEffect} from 'react';
import {Animated, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  About,
  GameScreen,
  MainScreen,
  ProfileScreen,
  QuizGameScreen,
  QuizScreen,
  TrueFalseGame,
  TrueFalseScreen,
  WelcomeScreen,
} from './screen';
import {AppProvider} from './store/app_context';

const Stack = createNativeStackNavigator();
const bg = [
  require('./assets/img/load/loader1.png'),
  require('./assets/img/load/loader2.png'),
];
function App() {
  const [id, setI] = useState(0);
  const itemAnime = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeStart();
    const timeOut = setTimeout(() => {
      navigateToMenu();
    }, 6000);
    return () => clearTimeout(timeOut);
  }, []);
  const fadeStart = () => {
    Animated.timing(itemAnime, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => fadeFinish());
  };

  const fadeFinish = () => {
    Animated.timing(itemAnime, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setI(prevState => prevState + 1);
      fadeStart();
    });
  };
  const navigateToMenu = () => {
    setI(2);
  };

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {id < 2 ? (
            <Stack.Screen name="Welcome" options={{headerShown: false}}>
              {() => (
                <View style={{flex: 1}}>
                  <Animated.Image
                    source={bg[id]}
                    style={[{width: '100%', flex: 1}, {opacity: itemAnime}]}
                  />
                </View>
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="MainScreen" component={MainScreen} />
          )}
          {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
          {/* <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              // animation: 'fade_from_bottom',
              animation: 'fade',
              animationDuration: 1500,
            }}
          /> */}
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="TrueFalseScreen" component={TrueFalseScreen} />
          <Stack.Screen name="TrueFalseGame" component={TrueFalseGame} />
          <Stack.Screen name="QuizScreen" component={QuizScreen} />
          <Stack.Screen name="QuizGameScreen" component={QuizGameScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="AboutScreen" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
