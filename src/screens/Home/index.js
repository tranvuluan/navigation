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

  const handleChooseOption = (option) => {
    switch (option) {
      case labelButtons[0]:
        ShowBottomSheet(route.name, viewTypes.VIEW1, data1, 'replace', true); // (routeName, contentView, data, typeOfShow 'push || replace', isAllowClose);
        break;

      case labelButtons[1]:
        ShowBottomSheet(route.name, viewTypes.VIEW4, data1, 'push', true); // (routeName, contentView, data, typeOfShow 'push || replace', isAllowClose);
        break;

      case labelButtons[2]:
        ShowBottomSheet(route.name, viewTypes.VIEW6, data1, 'push', false); // (routeName, contentView, data, typeOfShow 'push || replace', isAllowClose);
        break;

      case labelButtons[3]:
        ShowBottomSheet(route.name, viewTypes.VIEW9, data1, 'push', true); // (routeName, contentView, data, typeOfShow 'push || replace', isAllowClose);
        break;

      default:
        break;
    }
    setCurrentOption(option);
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
    </View>
  )
}

export default Home;

