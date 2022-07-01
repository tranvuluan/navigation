import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { viewTypes } from './viewTypes';
import { allowCloseBottomSheetModal, showBottomSheetModal } from '../redux/BottomSheet/actions';
import {useDispatch, useSelector} from 'react-redux';
import { navigationRef } from '../../App';

const View1 = ({data, viewOfRoute}) => {
  const dispatch = useDispatch();
  // const isAllowClose = useSelector(state => state.bottomsheet.modals.find(modal => modal.routeName === viewOfRoute).stackModal.pop().isAllowClose);


    useEffect(() => {
        // fetching data
        fetch('http://18.218.101.141:5000/api/v1/category')
        .then(response => response.json())
        .then(data => {
          console.log('fetched')
          allowCloseBottomSheetModal(dispatch, {
            routeName: viewOfRoute
          })
        });

    }, []);

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