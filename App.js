/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

//Screens
import StackNav1 from './App/Navigator/StackNav1'

const App = () => {
  return (
    <NavigationContainer>
      <StackNav1 />
    </NavigationContainer>
  );
};

/*  <List_pres_deu type={true} value='100400000' /> */
export default App;
{/* */ }
{/* <Main deben_value='400.000' debes_value='100.000'>

</Main> */}