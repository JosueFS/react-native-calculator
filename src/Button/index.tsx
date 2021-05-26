import React from 'react';
import styled from 'styled-components/native';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;
  background: #ec2a66;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <Container>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
