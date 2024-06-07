// // components/LoginHandler.js
// import { Alert } from 'react-native';

// const LoginHandler = async (email, password) => {
//   const payload = {
//     email: email,
//     password: password,
//   };

//   try {
//     const response = await fetch('https://your-api-url.com/authenticate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     });

//     const data = await response.json();

//     if (data.success) {
//       Alert.alert('Login Successful', 'You have logged in successfully!');
//     } else {
//       Alert.alert('Login Failed', 'Invalid email or password.');
//     }
//   } catch (error) {
//     Alert.alert('Error', 'Something went wrong. Please try again.');
//     console.error('Error:', error);
//   }
// };

// export default LoginHandler;
