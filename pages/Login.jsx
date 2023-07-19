import React, { useState, useRef } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput from 'react-native-phone-number-input';
//----------end of packages import --------------------//


//-----------file module import------------------------//
import { fontSize, fontWeight } from '../assets/font/font';
import { colors } from '../assets/colors/colors';
import SignUpBtn from '../reusableComponents/SignUpBtn'
import SignInBy from '../reusableComponents/SignInBy';
//----------------end of file module imports ----------//

const Login = () => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        gap: 16,
      }}
    >
      <View>
        <Text
          style={{
            fontWeight: fontWeight.medium,
            fontSize: fontSize.regular,
          }}
        >
          Enter your number
        </Text>
      </View>

      <View>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="GH"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        <SignUpBtn btnName ="Sign Up"/>
      </View>

      <View style = {{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 40
      }}>
        {/* orther sign in options */}

        <View style = {{
          width: 140,
          height: 3,
          backgroundColor: colors.secondary
        }}></View>
          <Text>OR</Text>
        <View style = {{
          width: 140,
          height: 3,
          backgroundColor: colors.secondary
        }}></View>
      </View>

      <View style = {{
        display: "flex",
        flexDirection: "column",
        gap: 16
      }}>
        <SignInBy accountTypeName="Google"/>
        <SignInBy accountTypeName="Facebook"/>
      </View>
    </SafeAreaView>
  );
};

export default Login;
