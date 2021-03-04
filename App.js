import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MainTab} from './navigation/Tab'

export default function App() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}