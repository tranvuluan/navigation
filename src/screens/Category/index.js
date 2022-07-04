import { Button, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { changeRoute } from '../../redux/Route/actions';
import { useDispatch } from 'react-redux';
import {
  ShowBottomSheet,
  viewTypes,
} from '../../utils/BottomSheet';
import styles from './style';

const Category = ({ navigation, route }) => {
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

  const data2 = {
    code: 'SG',
    name: 'Singapore'
  }

  const handlePress = () => {
    ShowBottomSheet(route.name, viewTypes.VIEW11, true, data2, 'push'); // (routeName, contentView, isAllowClose, data, typeOfShow 'push || replace');
  }

  return (
    <View style={styles.container}>
      <Text>Category</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <Button title="show" onPress={handlePress} />
    </View>
  )
}

export default Category;

