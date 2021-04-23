import React from 'react';
import { View } from 'react-native';

import {SvgFromUri} from 'react-native-svg';

import { Button, NameText, Image} from './styles';

import {RectButtonProps} from 'react-native-gesture-handler';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

const PlantCardPrimary: React.FC<PlantProps> = ({ data, ...rest}) => {
  console.log(data.photo)
  return (
    <Button {...rest}>
      <SvgFromUri
        uri={data.photo}
        width={70}
        height={70}
      />
      <NameText>
        {data.name}
      </NameText>
    </Button>
  );
};

export default PlantCardPrimary;
