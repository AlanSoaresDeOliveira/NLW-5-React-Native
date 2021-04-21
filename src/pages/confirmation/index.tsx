import React from 'react';
import {
  SafeArea,
  Container,
  Emoji,
  TitleText,
  SubTitleText,
  Footer
} from './styles';

import Button from '../../components/Button';

const Confirmation: React.FC = () => {

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
         <Button title="Começar" />
        </Footer>
      </Container>

    </SafeArea>
  );
};

export default Confirmation;
