import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SplashScreen from './SplashScreen'
import { useNavigation } from '@react-navigation/native'

//hooks
import { useEffect, useState } from 'react'

const Home = () => {
    const [splashScreen, setSplashScreen] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setSplashScreen(false)
        }, 3000) 
    }, [])

    //while loading the splash screen, check wether the user is logged in or not,
    //if yes, route user to the home page of the app, else route to the login/signup page
   const navigation = useNavigation()
   const navigateToLogin = () => {
        navigation.navigate('2FAuthPage')
   }

   useEffect(() => {
    if (!splashScreen) {
      navigateToLogin();
    }
  }, [splashScreen]);

  return (
    <SafeAreaView>
        {splashScreen ? <SplashScreen/> : <></>}
    </SafeAreaView>
  )
}

export default Home