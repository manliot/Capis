/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'


import GoogleConfig from './firebase/GoogleConfig'
//Navigation
import AuthStack from './App/Navigator/AuthStack'


const App = () => {
  GoogleConfig()
  return (
    < NavigationContainer >
      <AuthStack />
    </NavigationContainer >

  );
};

{/* <List_pres_deu type={true} value='100400000' /> */ }
export default App;
/*  <List_pres_deu type={true} value='100400000' /> */
{/* */ }
{/* <Main deben_value='400.000' debes_value='100.000'>

</Main> */}