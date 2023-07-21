
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import "react-native-gesture-handler"
//pages
import Home from './pages/Home';
import Login from './pages/Login';
import TwoFAuthPage from './pages/TwoFAuthPage';
import FindRidePage from './pages/FindRidePage';
//redux configurations
import { Provider } from 'react-redux';
import store from './app/store';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <GestureHandlerRootView >
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
    </GestureHandlerRootView>
  );
}


