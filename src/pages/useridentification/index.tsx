import React, {useState} from 'react'
import {Platform, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

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

  async function handlerStart() {
    if (!name) {
      return Alert.alert('Me diz como chamar você');
    }

    try {
      await AsyncStorage.setItem('@plantmanager:user', name as string );
    } catch (error) {
      console.log(error);
    }

    navigation.navigate('Confirmation')

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
