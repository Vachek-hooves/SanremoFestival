import {useState, useEffect, createContext, useContext} from 'react';
import {saveDataByKey, fetchDataByKey} from './asyncStorageUtils';
import {APP_DATA_QUIZ, APP_DATA_TRUE_FALSE} from '../data/appData';

export const AppContext = createContext({
  easyTrueFalse: [],
  hardTrueFalse: [],
  quiz: [],
  requiredLevel: () => {},
  openNextLvlAddScore: () => {},
});

export const AppProvider = ({children}) => {
  const [easyTrueFalse, setEasyTrueFalse] = useState([]);
  const [hardTrueFalse, setHardTrueFalse] = useState([]);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    bootAllData();
  }, []);

  const bootAllData = async () => {
    try {
      let easyTrue = await fetchDataByKey('easy');
      let hardTrue = await fetchDataByKey('hard');
      let quiz = await fetchDataByKey('quiz');

      if (easyTrue.length === 0) {
        await saveDataByKey(APP_DATA_TRUE_FALSE, 'easy');
        easyTrue = await fetchDataByKey('easy');
      }
      setEasyTrueFalse(easyTrue);

      if (hardTrue.length === 0) {
        await saveDataByKey(APP_DATA_TRUE_FALSE, 'hard');
        hardTrue = await fetchDataByKey('hard');
      }
      setHardTrueFalse(hardTrue);

      if (quiz.length === 0) {
        await saveDataByKey(APP_DATA_QUIZ, 'quiz');
        setQuiz(quiz);
      }
    } catch (error) {
      'data boot faelure', error;
    }
  };

  const openNextLvlAddScore = async (id, score, complexity) => {
    console.log(id, score, complexity);
    try {
      const gameData = await fetchDataByKey(complexity);
      console.log('data to be changed',gameData);
      const currentIndex = gameData.findIndex(game => game.id === id);
      if (currentIndex !== -1) {
        const updatedGame = gameData.map((game, i) => {
          if (i === currentIndex) {
            return {...game, score: score};
          } else if (i === currentIndex + 1) {
            return {...game, active: true};
          }
          return game;
        });
        console.log('CONTEXT FUNCTION', updatedGame);

        await saveDataByKey(updatedGame, complexity);

        if (complexity === 'easy') {
          setEasyTrueFalse(updatedGame);
        } else if (complexity === 'hard') {
          setHardTrueFalse(updatedGame);
        }
      }
    } catch (error) {
      console.error('Failed to update and save score/active state', error);
    }
  };

  const requiredLevel = complexity => {
    switch (complexity) {
      case 'easy':
        return easyTrueFalse;
      case 'hard':
        return hardTrueFalse;
      default:
        break;
    }
  };

  const value = {
    easyTrueFalse,
    hardTrueFalse,
    quiz,
    requiredLevel,
    openNextLvlAddScore,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};
