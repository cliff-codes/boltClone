import React from 'react'
import { Button, Text, View} from 'react-native'

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheetModal,
  useBottomSheetTimingConfigs,
} from '@gorhom/bottom-sheet';
import { useNavigation, useIsFocused } from '@react-navigation/native';



const FindRidePage = () => {
  const isFocused = useIsFocused()
  const {present} = useBottomSheetModal()

  //function to handle automatic bottom drawer pop-up.

  React.useEffect(() => {
    if(isFocused){
      present()
    }
  },[isFocused, present])

  //the main page styling
  const wrapperStyle = {
    marginTop: 20,
    
  }
  return (
    <View style = {wrapperStyle}>
        <Text>Just find your ride</Text>
        <BottomSheetModal 
          snapPoints={['40%']}
          key="bottomSheet"
          timingConfigs = {useBottomSheetTimingConfigs()}
        >
          <View style = {{
            backgroundColor: "#f1f1f1", 
            padding: 16
          }}>
            <Text style = {{
              color: 'red'
            }}>Button Sheet Content</Text>
            <Button title='Set Automatically'>Set Automatically</Button>
            <Button title='set Later'>Set Later</Button>
          </View>
            
        </BottomSheetModal>
    </View>
  )
}

export default FindRidePage