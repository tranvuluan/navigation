import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeRoute } from '../../redux/Route/actions';
import {
  ShowBottomSheet,
  viewTypes,
} from '../../utils/BottomSheet';
 

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        changeRoute(dispatch, {
          currentRoute: route.name
        })
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const data1 = {
    code: 'VN',
    name: 'Viet Nam'
  }


  const handlePress = () => {
    ShowBottomSheet('Home', viewTypes.VIEW1, false, data1, 'push'); // (routeName, contentView, isAllowClose, data, typeOfShow 'push || replace');
  }


  return (
    <View style={styles.container}>
      <Button title="Go to about" onPress={() => navigation.navigate('About')} />
      <Text style={styles.home}>Home</Text>
      <Button title="show" onPress={handlePress} />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  home: {
    fontSize: 24
  }

})
