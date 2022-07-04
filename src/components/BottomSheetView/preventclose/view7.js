import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { ShowBottomSheet } from '../../../utils/BottomSheet';


const View7 = ({ data, viewOfRoute, actionSheetRef }) => {

  const data1 = {
    code: 'VN',
    name: 'Viet Nam'
  }

  const handlePress = () => {
    ShowBottomSheet('Home', viewTypes.VIEW8, data1, 'replace', true);
  }

  return (
    <View style={styles.contentContainer}>
      <Text>View 7 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
      <Button title="Push" onPress={handlePress} />
    </View>
  )
}

export default View7

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