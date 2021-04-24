import React from 'react';
import {Container, NameView, HeloText, UserNameText, UserImage} from './styles';

import userIMG from '../../../assets/alan.png'

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({name}) => {
  return (
    <Container>
      <NameView>
        <HeloText>Olá,</HeloText>
        <UserNameText>{name}</UserNameText>
      </NameView>
      <UserImage source={userIMG}/>

    </Container>
  );
};

export default Header;
