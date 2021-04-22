import React from 'react';
import {Container, NameView, HeloText, UserNameText, UserImage} from './styles';

import userIMG from '../../../assets/alan.png'

const Header: React.FC = () => {
  return (
    <Container>
      <NameView>
        <HeloText>Olá,</HeloText>
        <UserNameText>Alan</UserNameText>
      </NameView>
      <UserImage source={userIMG}/>

    </Container>
  );
};

export default Header;
