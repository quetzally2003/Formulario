import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/HomeScreen';
import Registrar from './Screens/RegistrarScreen';
import Loggin from './Screens/LogginScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Loggin'
          component={Loggin}
          options={{title: 'Iniciar sesion'}}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{title: 'Bienvenidos'}}
        />
         <Stack.Screen
          name='Registrar'
          component={Registrar}
          options={{title: 'Formulario'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;

  
