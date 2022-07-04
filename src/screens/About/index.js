import { Button, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { changeRoute } from '../../redux/Route/actions';
import { useDispatch } from 'react-redux';
import {
  ShowBottomSheet,
  viewTypes,
} from '../../utils/BottomSheet';
import styles from './style';

const About = ({ navigation, route }) => {
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
    ShowBottomSheet(route.name, viewTypes.VIEW11, true, data1, 'push'); // (routeName, contentView, isAllowClose, data, typeOfShow 'push || replace');
  }

  return (
    <View style={styles.container}>
      <Text>About</Text>
      <View style={styles.cardItem}>
        <Text>id: {item.id}</Text>
        <Text>name: {item.name}</Text>
        <Text>price: {item.price}</Text>
        <Image style={styles.image} source={{ uri: "https://reactjs.org/logo-og.png" }} />
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="show" onPress={handlePress} />
    </View>
  )
}

export default About;

