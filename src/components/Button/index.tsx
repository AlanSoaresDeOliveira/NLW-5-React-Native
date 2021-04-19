import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {CustomButton, CustomButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <CustomButton {...rest}>
      <CustomButtonText>{title}</CustomButtonText>
    </CustomButton>
  );
};

export default Button;
