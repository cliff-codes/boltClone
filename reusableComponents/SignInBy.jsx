import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../assets/colors/colors'

const SignInBy = ({accountTypeName}) => {
  return (
    <View>
        <TouchableOpacity style = {{
          width: 330,
          paddingTop: 16,
          paddingBottom: 16,
          borderColor: colors.secondary,
          border: "1 solid red",
          backgroundColor: colors.secondary,
          borderRadius: 30,
          display: "flex",
          alignItems: "center"
        }}>
          <Text>{`Sign in with ${accountTypeName}`}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignInBy