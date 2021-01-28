/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './firebase/AuthProvider'
import { GoogleSignin } from '@react-native-community/google-signin';


//Screens
import Stack1 from './App/Navigator/Stack1'


const App = () => {

  GoogleSignin.configure({
    webClientId: '33058736268-brr7ika8q24bt487j48r99h2hua0mq79.apps.googleusercontent.com',
  });

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack1 />
      </NavigationContainer>
    </AuthProvider>
  );
};

{/* <List_pres_deu type={true} value='100400000' /> */ }
export default App;
/*  <List_pres_deu type={true} value='100400000' /> */
{/* */ }
{/* <Main deben_value='400.000' debes_value='100.000'>

</Main> */}