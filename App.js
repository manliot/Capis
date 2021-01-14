/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';


//Screens
import Main from './App/Views/Main'
import List_pres_deu from './App/Views/List_pres_deu'

import StackNav1 from './App/Navigator/StackNav1'

const App = () => {
  return (
    <StackNav1 />
  );
};

/*  <List_pres_deu type={true} value='100400000' /> */
export default App;
{/* */ }
{/* <Main deben_value='400.000' debes_value='100.000'>

</Main> */}