import React from 'react';
import styled from 'styled-components/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TRootStackParamList } from '../../types';
import { Button } from 'react-native';

const ScreenView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ScreenText = styled.Text`
  color: darkcyan;
  font-size: 30px;
  text-align: center;
`;

type TProps = NativeStackScreenProps<TRootStackParamList, 'NotHome'>;

const OtherScreen: React.FC<TProps> = ({ navigation }) => {
  return (
    <ScreenView>
      <ScreenText>Apparently this is not the home screen</ScreenText>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </ScreenView>
  );
};

export default OtherScreen;
