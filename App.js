import React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import BottomSheet from './src/components/BottomSheet/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainNavigator from './src/navigation';



export const navigationRef = createNavigationContainerRef();
const routeNameRef = React.createRef(null);

export function getCurrentRouteName() {
  return routeNameRef;
}


export function navigate(name, params) {
  if (navigationRef.isReady()) {
    // Perform navigation if the react navigation is ready to handle actions
    console.log('ready')
    navigationRef.navigate(name, params);
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef} >
          <MainNavigator />
          <BottomSheet />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  )
}



export default App;
