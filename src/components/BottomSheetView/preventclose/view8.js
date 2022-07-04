import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { ShowBottomSheet } from '../../../utils/BottomSheet';


const View8 = ({ data, viewOfRoute, actionSheetRef }) => {

  return (
    <View style={styles.contentContainer}>
      <Text>View 8 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
    </View>
  )
}

export default View8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    height: 200,
    alignItems: 'center',
  },
});