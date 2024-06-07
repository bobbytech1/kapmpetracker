// screens/LoginScreen.js
import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP  as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LoginHandler from '../components/authcomponents/LoginHandler';
import { CustomButton } from '../components/generalcomponents/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    LoginHandler(email, password);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

 

  return (
    <View className='flex-1 px-4 bg-white'>
      <Text className='text-2xl font-semibold mb-4' style={styles.loginhead}>Welcome back Champ!</Text>
      <TextInput
        className='p-4 mb-4 rounded-8px'
        placeholder="Email"
        placeholderTextColor={'gray'}
        style={[styles.textinput1,  isFocused ? styles.focusedInput : null,]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className='p-4 mb-4 rounded-8px'
        placeholder="Password"
        placeholderTextColor={'gray'}
        style={[styles.textinput2,  isFocused ? styles.focusedInput : null,]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

        <CustomButton message={"Login"} onPress={handleLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    loginhead:{
        fontSize: wp(6),
        fontFamily: 'HelveticaNeueLight',
    }, 
    textinput1:{
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: wp(4.5),
        fontFamily: 'HelveticaNeueLight',
    },
    textinput2:{
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: wp(4.5),
        fontFamily: 'HelveticaNeueLight',
    }, 
    focusedInput: {
      borderWidth: 1,
      borderColor: '#015B20',
    },
});
