import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from './Button';

import {
  Container,
  Logo,
  Title,
  InputGroup,
  GenderCard,
  CardTitle,
  InputContainer,
  InputTitle,
  TextInput,
  ResultContainer,
  ResultIMCText,
  ResultTitle,
} from './styles';

type IGender = 'male' | 'female';

const App: React.FC = () => {
  const [gender, setGender] = useState<IGender>();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState<Number>();

  const [isFocused, setIsFocused] = useState(false);

  const handleSelectGender = newGender => {
    setGender(newGender);
  };

  const handleCalcIMC = () => {
    const formatedHeight = parseFloat(height.replace(',', '.'));
    const formatedWeight = parseFloat(weight.replace(',', '.'));

    switch (gender) {
      case 'male':
        setIMC((formatedHeight * formatedHeight) / formatedWeight);
        break;
      case 'female':
        setIMC((formatedHeight * formatedHeight) / formatedWeight);
        break;
      default:
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#0A0F32" />

      <View>
        <Logo>
          <FontAwesome name="balance-scale" size={64} color="#FFF" />
          <Title>Calculadora de IMC</Title>
        </Logo>

        <InputGroup>
          <GenderCard
            style={[
              gender !== 'male' && { borderColor: 'transparent' },
              gender === 'male' && { borderColor: '#ec2a66' },
            ]}
            onPress={() => handleSelectGender('male')}
          >
            <CardTitle>Homem</CardTitle>
            <MaterialCommunityIcons name="human-male" size={104} color="#fff" />
          </GenderCard>

          <GenderCard
            style={[
              gender !== 'female' && { borderColor: 'transparent' },
              gender === 'female' && { borderColor: '#ec2a66' },
            ]}
            onPress={() => handleSelectGender('female')}
          >
            <CardTitle>Mulher</CardTitle>
            <MaterialCommunityIcons
              name="human-female"
              size={104}
              color="#fff"
            />
          </GenderCard>
        </InputGroup>

        <InputGroup>
          <InputContainer isFocused={isFocused}>
            <InputTitle>Peso</InputTitle>
            <TextInput
              keyboardType="number-pad"
              keyboardAppearance="dark"
              placeholderTextColor="#666360"
              maxLength={4}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChangeText={e => setWeight(e)}
              value={weight}
            />
          </InputContainer>

          <InputContainer isFocused={isFocused}>
            <InputTitle>Altura</InputTitle>
            <TextInput
              keyboardType="number-pad"
              keyboardAppearance="dark"
              placeholderTextColor="#666360"
              maxLength={3}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChangeText={e => setHeight(e)}
              value={height}
            />
          </InputContainer>
        </InputGroup>

        <Button onPress={handleCalcIMC}>Calcular</Button>

        {imc && (
          <ResultContainer>
            <ResultTitle>O IMC é:</ResultTitle>
            <ResultIMCText>{`${imc.toFixed(1)} kg/m²`}</ResultIMCText>
          </ResultContainer>
        )}
      </View>
    </Container>
  );
};
export default App;
