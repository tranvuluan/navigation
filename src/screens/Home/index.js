import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import ActionSheet, { SheetManager, SheetProps, registerSheet } from "react-native-actions-sheet";
import { useDispatch, useSelector } from 'react-redux';
import { showBottomSheetModal } from '../../redux/BottomSheet/actions';
import { viewTypes } from './../../ContentView/viewTypes';
import BottomSheet from '../../ActionSheet/BottomSheet';

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const data1 = {
    code: 'VN',
    name: 'Viet Nam'
  }

  const handlePress = () => {
    showBottomSheetModal(dispatch, {
      routeName: route.name,
      modal: {
        contentView: viewTypes.VIEW1,
        data: data1,
        isAllowClose: false
      }
    })
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
