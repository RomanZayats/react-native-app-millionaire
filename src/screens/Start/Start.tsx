import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../../../types';
import {
  ButtonText,
  Head,
  StartButton,
  StartView,
  TriangleBackground,
} from 'screens/Start/styles';

type TProps = NativeStackScreenProps<TRootStackParamList, 'Start'>;

const Start: React.FC<TProps> = ({ navigation }) => {
  return (
    <StartView>
      <TriangleBackground />
      <Head>Freaking Awesome Game!</Head>
      <StartButton onPress={() => navigation.navigate('NotHome')}>
        <ButtonText>Start</ButtonText>
      </StartButton>
    </StartView>
  );
};

export default Start;
