import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  //functional component

  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
      onChangeText={onChangeText}
      />
    </View>
  );
};
const styles = {
inputStyle: {
  color: '#000',
  paddingRight: 5,
  paddingLeft: 5,
  fontSize: 18,
  lineHeight: 23, //the amount of space between each text
  flex: 2 //add up the values of flex and take this number and divide it
  //so 2/3 of the input style takes up the space
},
labelStyle:{
  fontSize: 18,
  paddingLeft: 20,
  flex:  1 //add up the values of flex and take this number and divide it
  //so 1/3 of the input style takes up the space
},
containerStyle: {
  height: 40,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center'
}


};

export { Input };
