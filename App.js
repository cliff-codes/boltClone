import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { colors } from './assets/colors/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
//pages
import Home from './pages/Home';
import Login from './pages/Login';
import TwoFAuthPage from './pages/TwoFAuthPage';
import FindRidePage from './pages/FindRidePage';
//redux configurations
import { Provider } from 'react-redux';
import store from './app/store';
//hooks



const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='2FAuthPage' component={TwoFAuthPage} options={{headerShown: false}} />
            <Stack.Screen name='findRidePage' component={FindRidePage} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
   </Provider>
  );
}


