import React from 'react';
import { Button, NameText} from './styles';

import {RectButtonProps} from 'react-native-gesture-handler';

interface EnviromentButtonProps extends RectButtonProps {
  title: String;
  active?: boolean;
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({ title, active = false, ...rest}) => {
  return (
    <Button {...rest}>
      <NameText>{ title }</NameText>
    </Button>
  );
};

export default EnviromentButton;
