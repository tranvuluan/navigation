import React, { useEffect, useRef } from 'react';
import { useNavigationContainerRef, NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SheetProvider } from "react-native-actions-sheet";
import HomeScreen from './src/screens/Home';
import AboutScreen from './src/screens/About';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import BottomSheet from './src/ActionSheet/BottomSheet';
const Stack = createNativeStackNavigator();
// import "./src/ActionSheet/MySheet";
// import "./src/ActionSheet/Sheet2";



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
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}
        onReady={() => navigate('Home')}

        onStateChange={() => {
          const previousRouteName = routeNameRef.current
          const currentRouteName = navigationRef.current.getCurrentRoute().name

          if (previousRouteName !== currentRouteName) {
            // Do something here with it
          }

          // Save the current route name for later comparision
          routeNameRef.current = currentRouteName
        }}
      >
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home"
            component={HomeScreen}
            options={{
              title: 'Test App',
              headerStyle: {
                backgroundColor: 'tomato'
              }
            }}
          />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomSheet />
    </Provider>
  )
}



export default App;
