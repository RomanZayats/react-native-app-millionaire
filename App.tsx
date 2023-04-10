import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: magenta;
  font-size: 50px;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Olyt!</Text>
      <StyledText>Hey, Zayats.ua!</StyledText>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
