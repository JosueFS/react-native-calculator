import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Button from './Button';

import {
  Container,
  Logo,
  Title,
  InputGroup,
  InputContainer,
  InputTitle,
  TextInput,
  ResultContainer,
  ResultText,
  ResultTitle,
} from './styles';

const App: React.FC = () => {
  const [hourlyValue, setHourlyValue] = useState('');
  const [workload, setWorkload] = useState('');
  const [grossSalary, setGrossSalary] = useState<Number>();
  const [inss, setInss] = useState<Number>();
  const [ir, setIr] = useState<Number>();
  const [syndicate, setSyndicate] = useState<Number>();
  const [netSalary, setNetSalary] = useState<Number>();

  const [isFocused, setIsFocused] = useState(false);

  const handleCalcIMC = () => {
    const formatedHourlyValue = parseFloat(hourlyValue.replace(',', '.'));
    const formatedWorkload = parseFloat(workload.replace(',', '.'));

    const salary = formatedHourlyValue * formatedWorkload;
    const IR = salary * 0.11;
    const inssTax = salary * 0.08;
    const syndicateTax = salary * 0.05;

    setGrossSalary(salary);
    setIr(IR);
    setInss(inssTax);
    setSyndicate(syndicateTax);
    setNetSalary(salary - IR - inssTax - syndicateTax);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#0A0F32" />

      <View>
        <Logo>
          <FontAwesome name="file-invoice-dollar" size={64} color="#FFF" />
          <Title>Calculadora de Salário</Title>
        </Logo>

        <InputGroup>
          <InputContainer isFocused={isFocused}>
            <InputTitle>Valor/hora</InputTitle>
            <TextInput
              keyboardType="number-pad"
              keyboardAppearance="dark"
              placeholderTextColor="#666360"
              maxLength={4}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              blurOnSubmit
              onChangeText={e => setHourlyValue(e)}
              value={hourlyValue}
            />
          </InputContainer>

          <InputContainer isFocused={isFocused}>
            <InputTitle>Total de Horas</InputTitle>
            <TextInput
              keyboardType="number-pad"
              keyboardAppearance="dark"
              placeholderTextColor="#666360"
              maxLength={3}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              blurOnSubmit
              onChangeText={e => setWorkload(e)}
              value={workload}
            />
          </InputContainer>
        </InputGroup>

        <Button onPress={handleCalcIMC}>Calcular</Button>

        {grossSalary && (
          <ResultContainer>
            <ResultTitle>Extrato de Pagamento:</ResultTitle>
            <ResultText>
              {`Salário Bruto: R$${grossSalary.toFixed(2)}`}
            </ResultText>

            <ResultTitle>Descontos:</ResultTitle>

            <ResultText>{`Imposto de Renda: R$${ir.toFixed(2)}`}</ResultText>

            <ResultText>{`INSS: R$${inss.toFixed(2)}`}</ResultText>

            <ResultText>{`Sindicato: R$${syndicate.toFixed(2)}`}</ResultText>

            <ResultText
              style={{ marginBottom: 8, marginTop: 16, fontSize: 24 }}
            >
              {`Salário Líquido: R$${netSalary.toFixed(2)}`}
            </ResultText>
          </ResultContainer>
        )}
      </View>
    </Container>
  );
};
export default App;
