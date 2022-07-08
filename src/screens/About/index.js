import { Button, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { changeRoute } from '../../redux/Route/actions';
import { useDispatch } from 'react-redux';
import {
  GetScreenData,
  ShowBottomSheet,
  viewTypes,
} from '../../utils/BottomSheet';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const About = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const screenData = GetScreenData(route.name);


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
    code: 'JP',
    name: 'Japan'
  }

  const item = {
    id: 1,
    name: 'Item 1',
    price: '$100',
    image: 'https://picsum.photos/200/300?random=1'
  }

  const handlePress = () => {
    ShowBottomSheet(route.name, viewTypes.VIEW11, data1, 'push', true); // (routeName, contentView, data, typeOfShow 'push || replace', isAllowClose);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardItem}>
      <Text>Company: {screenData?.company || ''}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button title="Go to Category" onPress={() => navigation.navigate('Category')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button title="show" onPress={handlePress} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default About;

