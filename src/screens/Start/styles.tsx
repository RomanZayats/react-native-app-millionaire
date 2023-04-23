import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const StartView = styled.View`
  position: relative;
  background-color: ${({ theme }) => theme.primaryBackground};
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
`;

export const TriangleBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  border-style: solid;
  border-right-width: ${width / 2}px;
  border-right-color: ${({ theme }) => theme.secondaryBackground};
  border-bottom-width: ${height / 2}px;
  border-bottom-color: ${({ theme }) => theme.secondaryBackground};
  border-left-width: ${width / 2}px;
  border-left-color: transparent;
  border-top-width: ${height / 2}px;
  border-top-color: transparent;
`;

export const Head = styled.Text`
  color: ${({ theme }) => theme.black};
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;

export const StartButton = styled.Pressable`
  position: absolute;
  bottom: 120px;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 16px 0;
  width: 80%;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;
