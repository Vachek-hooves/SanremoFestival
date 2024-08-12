import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomLinearGradient} from '../components/ui';
import {useAppContext} from '../store/app_context';

const TrueFalseGame = ({route}) => {
  const {id, complexity} = route.params;
  

  return <CustomLinearGradient></CustomLinearGradient>;
};

export default TrueFalseGame;

const styles = StyleSheet.create({});
