import React, {useState} from 'react'
import {Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import colors from '../../styles/colors';

import Button from '../../components/Button';
import {
  SafeArea,
  KeyBoardAvoid,
  Container,
  Form,
  Header,
  Emoji,
  TitleText,
  Input,
  ContainerOfButton
} from './styles';

const UserIdentification: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<String>();

  const navigation = useNavigation();

  function handlerInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handlerInputFocus() {
    setIsFocused(true)
  }

  function handlerInputChange(value: String) {
    setIsFocused(!!value)
    setName(value)
  }

  function handlerStart() {
    if (name) {
      navigation.navigate('Confirmation')
    }
  }

  return (
    <SafeArea>
      <KeyBoardAvoid behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Form>
              <Header>
                <Emoji>
                  {isFilled ? '😁' :'😀'}
                </Emoji>

                <TitleText>
                  Como podemos{'\n'} chamar você?
                </TitleText>

              </Header>

              <Input
                style={[(isFocused || isFilled)  && { borderColor: colors.green}]}
                onBlur={handlerInputBlur}
                onFocus={handlerInputFocus}
                placeholder="Digite um nome"
                onChangeText={handlerInputChange}
              />

              <ContainerOfButton>
                <Button title="Confirmar" onPress={handlerStart}/>
              </ContainerOfButton>

            </Form>
          </Container>
        </TouchableWithoutFeedback>
      </KeyBoardAvoid>
    </SafeArea>
  )
}

export default UserIdentification;
