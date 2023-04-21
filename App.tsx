import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from 'screens/Start';
import OtherScreen from 'screens/OtherScreen';
import { TRootStackParamList } from './types';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from 'theme/theme';

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();
const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Navigator initialRouteName="Start">
          <Screen name="Start" component={Start} />
          <Screen name="NotHome" component={OtherScreen} />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
