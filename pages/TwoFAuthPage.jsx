import React from 'react'
import { Text, View } from 'react-native'

//------------file imports-------------
import FourDigitsAuthHandler from './FourDigitsAuthHandler'
import { fontSize } from '../assets/font/font'


const TwoFAuthPage = () => {
  return (
    <View style = {{
      margin: 10,
      marginTop: 32,
    }}>
      <View>
        <Text style = {{
          fontSize: fontSize.small,
          marginBottom: 30,
          textAlign: "center"
        }}>A code has been sent to number</Text>
      </View>
      <View>
          <FourDigitsAuthHandler/>
      </View>
    </View>
  )
}

export default TwoFAuthPage