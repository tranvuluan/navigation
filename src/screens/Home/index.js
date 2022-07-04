import { Button, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeRoute } from '../../redux/Route/actions';
import {
  ShowBottomSheet,
  viewTypes,
} from '../../utils/BottomSheet';
import PreviewLayout from '../../components/PreviewLayout';
import styles from './style';


const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [currentOption, setCurrentOption] = useState();

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
  console.log('load');

  const handleChooseOption = (option) => {
    console.log('Curernt Options: ' + currentOption);
    switch (option) {
      case labelButtons[0]:
        ShowBottomSheet(route.name, viewTypes.VIEW1, true, data1, 'replace'); // (routeName, contentView, isAllowClose, data, typeOfShow 'push || replace');
        break;

      case labelButtons[1]:
        ShowBottomSheet(route.name, viewTypes.VIEW4, true, data1, 'push'); // (routeName, contentView, isAllowClose, data, typeOfShow 'push || replace');
        break;

      case labelButtons[2]:
        ShowBottomSheet(route.name, viewTypes.VIEW6, true, data1, 'push'); // (routeName, contentView, isAllowClose, data, typeOfShow 'push || replace');
        break;

      default:
        break;
    }
    setCurrentOption(option);
  }


  const handlePress = () => {
    ShowBottomSheet(route.name, viewTypes.VIEW1, false, data1, 'push'); // (routeName, contentView, isAllowClose, data, typeOfShow 'push || replace');
  }

  const labelButtons = ['Replace', 'Push', 'Prevent close', 'Navigate'];


  return (
    <View style={styles.container}>
      <PreviewLayout
        label=" "
        values={labelButtons}
        selectedValue={currentOption}
        setSelectedValue={handleChooseOption}
      />
      {/* <Button title="Go to about" onPress={() => navigation.navigate('About')} /> */}
      {/* <Text style={styles.home}>Home</Text> */}
      {/* <Button title="show" onPress={handlePress} /> */}
    </View>
  )
}

export default Home;

