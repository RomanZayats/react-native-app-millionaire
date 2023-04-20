import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StyledText = styled.Text`
  color: magenta;
  font-size: 50px;
`;

type TProps = NativeStackScreenProps<TRootStackParamList, 'Home'>;

const Home: React.FC<TProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello, Olyt!</Text>
      <StyledText>Hey, Zayats.ua!</StyledText>
      <Button
        title="GoFuuuuu..."
        onPress={() => navigation.navigate('NotHome')}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
