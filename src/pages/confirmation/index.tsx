import React from 'react';
import {
  SafeArea,
  Container,
  Emoji,
  TitleText,
  SubTitleText,
  Footer
} from './styles';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';

const Confirmation: React.FC = () => {

  const navigation = useNavigation();

  function handlerMoveOn() {
    navigation.navigate("PlantSelect");
  }
  return (
    <SafeArea>
      <Container>
        <Emoji>
          😀
        </Emoji>

        <TitleText>
          Prontinho
        </TitleText>

        <SubTitleText>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitleText>

        <Footer>
         <Button title="Começar" onPress={handlerMoveOn} />
        </Footer>
      </Container>

    </SafeArea>
  );
};

export default Confirmation;
