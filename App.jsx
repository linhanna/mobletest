// In App.js in a new project

import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import BottomTabs from './src/navigation/BottomTabs';
import ProductDetail from './src/screens/Home/components/ProductDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => {
          return {
            animation: 'fade_from_bottom',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Text>Back</Text>
                </TouchableOpacity>
              );
            },
          };
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={({route, navigation}) => {
            return {
              headerTitleAlign: 'center',
              title: route?.params?.headerTitle,
              // title: 'Product 1',
            };
          }}
          name={'ProductDetail'}
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;