import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainContainerLayout from '../components/layout/MainContainerLayout';

import {CustomLinearGradient} from '../components/ui';

const MainScreen = () => {
  return (
    <CustomLinearGradient>
      <MainContainerLayout>
        <Text>content</Text>
      </MainContainerLayout>
    </CustomLinearGradient>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
