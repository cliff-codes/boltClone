import React from 'react'
import { Text, SafeAreaView } from 'react-native'


//assets
import { colors } from '../assets/colors/colors'
import { fontWeight } from '../assets/font/font'

const SplashScreen = () => {
  return (
    <SafeAreaView style = {{
      backgroundColor: colors.primary,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <Text style = {{
          fontSize: 30,
          fontWeight: fontWeight.bold,
          color: colors.secondary
        }}>Bolt</Text>
    </SafeAreaView>
  )
}

export default SplashScreen