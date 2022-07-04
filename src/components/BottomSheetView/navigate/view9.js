import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { ShowBottomSheet, viewTypes } from '../../../utils/BottomSheet';


const View9 = ({ data, viewOfRoute, actionSheetRef }) => {

  const data1 = {
    code: 'US',
    name: 'United States'
  }

  const handlePress = () => {
    ShowBottomSheet('Home', viewTypes.VIEW10, data1, 'push', true);
  }

  return (
    <View style={styles.contentContainer}>
      <Text>View 9 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
      <Button title="Push" onPress={handlePress} />
    </View>
  )
}

export default View9

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