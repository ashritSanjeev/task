import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';

import store from './src/store'
import PageRoutes from './src/pageRoutes'

const App = () => {

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <NativeBaseProvider>
          <PageRoutes/>
        </NativeBaseProvider>
      </Provider>
    </View>
  )
}

export default App;
