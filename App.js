import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { colors } from './assets/colors/colors';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
   <NavigationContainer>
        <View style = {{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colors.primary,
      }}>
        <Text style = {{
          color: colors.secondary
        }}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
   </NavigationContainer>
  );
}


