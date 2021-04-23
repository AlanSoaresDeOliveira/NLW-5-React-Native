import React from 'react';
import { Button, NameText} from './styles';

import {RectButtonProps} from 'react-native-gesture-handler';

interface EnviromentButtonProps extends RectButtonProps {
  title: String;
  active?: boolean;
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({ title, active, ...rest}) => {
  return (
    <Button {...rest} active={active}>
      <NameText active={active}>{ title }</NameText>
    </Button>
  );
};

export default EnviromentButton;
