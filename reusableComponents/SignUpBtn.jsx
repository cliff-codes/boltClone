import React from 'react'
import { TouchableOpacity, View, Text} from 'react-native'
import { colors } from '../assets/colors/colors'
import {fontSize, fontWeight} from '../assets/font/font'
import { useNavigation } from '@react-navigation/native';


const SignUpBtn = ({btnName}) => {

  const navigation = useNavigation()
  const navigateTo2FAuthPage = () => {
    navigation.navigate('2FAuthPage')
  }
  return (
    <View>
        <TouchableOpacity style = {{
          width: 330,
          backgroundColor: colors.accent,
          paddingTop: 16,
          paddingBottom: 16,
          borderRadius: 25,
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          marginTop: 24
        }}  onPress={navigateTo2FAuthPage}>
          <Text style = {{
            color: colors.secondary,
            fontWeight: fontWeight.bold,
            fontSize: fontSize.small
          }}>{btnName}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignUpBtn