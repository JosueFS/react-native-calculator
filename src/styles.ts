import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background: #0a0f32;
`;

export const Logo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 16px;
`;

export const InputGroup = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const GenderCard = styled.TouchableOpacity`
  width: 49%;
  height: 152px;
  padding: 0 16px;
  background: #282c4e;
  border-radius: 4px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #282c4e;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CardTitle = styled.Text`
  color: #9397a7;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 12px;
  margin-bottom: -16px;
`;

export const InputContainer = styled.View<ContainerProps>`
  width: 49%;
  height: 152px;
  padding: 0 16px;
  background: #282c4e;
  border-radius: 4px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #282c4e;
  flex-direction: column;
  align-items: center;
  ${props =>
    props.isFocused &&
    css`
      border-color: #ec2a66;
    `}
`;

export const InputTitle = styled.Text`
  color: #9397a7;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 12px;
  margin-bottom: -16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 64px;
  line-height: 64px;
  font-weight: 700;
  margin: 0;
`;

export const ResultContainer = styled.View`
  width: 100%;
  justify-content: center;
  text-align: center;
  background: #282c4e;
  border-radius: 4px;
  margin: 16px 0;
`;

export const ResultTitle = styled.Text`
  color: #9397a7;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 16px 16px 0;
`;

export const ResultIMCText = styled.Text`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
`;

export const ResultText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-left: 16px;
`;
