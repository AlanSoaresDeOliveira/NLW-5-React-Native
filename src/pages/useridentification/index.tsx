import React, {useState} from 'react'
import {Platform} from 'react-native';

import colors from '../../styles/colors';

import Button from '../../components/Button';
import { SafeArea, KeyBoardAvoid, Container, Form, Header, Emoji, TitleText,Input, ContainerOfButton} from './styles';

const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<String>();

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

  return (
    <SafeArea>
      <KeyBoardAvoid behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
              <Button title="Confirmar"/>
            </ContainerOfButton>

          </Form>
        </Container>
      </KeyBoardAvoid>
    </SafeArea>
  )
}

export default UserIdentification;
