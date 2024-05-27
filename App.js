import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingScreen } from './screens/LoadingScreen';
import { NativeWindStyleSheet } from 'nativewind';

const Stack = createNativeStackNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Loading'
      >
      <Stack.Screen
      name='Loading'
      component={LoadingScreen}
      options={{
        headerShown: false,
      }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native"
});


