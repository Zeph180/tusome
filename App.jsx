import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigation/index';
import GlobalContext from './GlobalContext';

export default function App() {
  return (
    <NavigationContainer>
      <GlobalContext>
        <StatusBar />
        <RootStackNavigator />
      </GlobalContext>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
