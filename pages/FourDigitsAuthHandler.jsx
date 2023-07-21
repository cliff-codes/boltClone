import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FourDigitsAuthHandler = () => {
    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');
  
    const digit2Ref = useRef();
    const digit3Ref = useRef();
    const digit4Ref = useRef();

    const navigation = useNavigation()
    
    const navigateToRidePage = () => {
        if(digit1.length > 0 && digit2.length > 0 && digit3.length > 0 && digit4.length > 0){
          navigation.navigate("findRidePage")
        }
    }


    // useEffect(() => {
    //     checkDigits()
    // },[digit1,digit2,digit3,digit4])
    
  
    const handleDigitChange = (digit, value) => {
      switch (digit) {
        case 1:
          setDigit1(value);
          break;
        case 2:
          setDigit2(value);
          break;
        case 3:
          setDigit3(value);
          break;
        case 4:
          setDigit4(value);
          break;
        default:
          break;
      }
    };
  
    const handleFocus = (digit) => {
      switch (digit) {
        case 2:
          digit2Ref.current.focus();
          break;
        case 3:
          digit3Ref.current.focus();
          break;
        case 4:
          digit4Ref.current.focus();
          break;
        default:
          break;
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={digit1}
          onChangeText={(value) => {
            handleDigitChange(1, value)
            navigateToRidePage()
          }}
          keyboardType="numeric"
          maxLength={1}
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => handleFocus(2)}
        />
        <TextInput
          ref={digit2Ref}
          style={styles.input}
          value={digit2}
          onChangeText={(value) => {
              handleDigitChange(2, value)
              navigateToRidePage()
          }}
          keyboardType="numeric"
          maxLength={1}
          returnKeyType="next"
          onSubmitEditing={() => handleFocus(3)}
        />
        <TextInput
          ref={digit3Ref}
          style={styles.input}
          value={digit3}
          onChangeText={(value) => {
            handleDigitChange(3, value)
            navigateToRidePage()
          }}
          keyboardType="numeric"
          maxLength={1}
          returnKeyType="next"
          onSubmitEditing={() => handleFocus(4)}
        />
        <TextInput
          ref={digit4Ref}
          style={styles.input}
          value={digit4}
          onChangeText={(value) => {
            handleDigitChange(4, value) 
            navigateToRidePage()
          }}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>
    );
}

export default FourDigitsAuthHandler


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 50,
    height: 50,
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 5,
    borderRadius: 10
  },
});


