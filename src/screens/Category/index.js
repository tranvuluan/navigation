import { Button, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { changeRoute } from '../../redux/Route/actions';
import { useDispatch } from 'react-redux';
import {
  checkOpenBottomSheet,
  SetScreenData,
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
    const bottomsheet = checkOpenBottomSheet('About', viewTypes.VIEW11);
    alert(JSON.stringify(bottomsheet));
  }

  const handleStoreData = () => {
    SetScreenData('About', {company: 'Zien'});
    navigation.navigate('About');
  }

  return (
    <View style={styles.container}>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <Button title="store screen data" onPress={handleStoreData} />
      <Button title="Check bottomsheet" onPress={handlePress} />
    </View>
  )
}

export default Category;

