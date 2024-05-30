import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingScreen } from './screens/LoadingScreen';
import { Welcome } from './screens/WelcomeScreen';
import { NativeWindStyleSheet } from 'nativewind';
import { FontProvider, useFontContext } from './contexts/FontContext';

const Stack = createNativeStackNavigator()

const AppContent = () => {
  const fontsLoaded = useFontContext();

  if (!fontsLoaded) {
    return null;  // Render nothing until fonts are loaded
  }



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

      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <FontProvider>
      <AppContent />
    </FontProvider>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native"
});


