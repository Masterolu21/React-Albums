import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>
    {children}
    </Text>
  </TouchableOpacity>
  );
};

const styles = {

 textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10, //provides space above
    paddingBottom: 10, //provides space below
  },

  buttonStyle: {
    justifyContent: 'flex-end',
    flex: 1, //I want this button to expand to fill as much as content as it can
    backgroundColor: '#0B0C10',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0B0C10',
    marginLeft: 5,
    marginRight: 5

  },


};

export { Button };
