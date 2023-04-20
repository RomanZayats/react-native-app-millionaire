import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'screens/Home';
import OtherScreen from 'screens/OtherScreen';
import { TRootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<TRootStackParamList>();
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="NotHome" component={OtherScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
