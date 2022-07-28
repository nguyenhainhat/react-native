import React from 'react';
import NumberFormat from 'react-number-format';
import { View, Text } from 'react-native'


export function FormatNumber({ value }) {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      renderText={formattedValue => <Text >{formattedValue} VND</Text>} // <--- Don't forget this!
    />
  );
}