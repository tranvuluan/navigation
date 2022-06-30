import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { viewTypes } from './viewTypes';
import { showBottomSheetModal } from '../redux/BottomSheet/actions';
import {useDispatch} from 'react-redux';
import { navigationRef } from '../../App';

const View1 = ({data}) => {
  const dispatch = useDispatch();

  const data2 = {
    code: 'SG',
    name: 'Singapore'
  }

  const handlePress = () => {
    showBottomSheetModal(dispatch, {
      routeName: navigationRef.getCurrentRoute().name,
      modal: {
        contentView: viewTypes.VIEW2,
        data: data2
      }
    })
  }

  const navigation = useNavigation();
  return (
    <View style={styles.contentContainer}>
      <Text>View 1 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
      <Button title="Show view2" onPress={handlePress} />
    </View>
  )
}

export default View1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    alignItems: 'center',
    height: 200
  },
});