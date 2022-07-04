import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ShowBottomSheet, viewTypes } from '../../../utils/BottomSheet';

const View2 = ({ data, viewOfRoute, actionSheetRef }) => {
  const navigation = useNavigation();
  const data3 = {
    code: 'US',
    name: 'United States'
  }

  const handleReplace = () => {
    ShowBottomSheet('Home', viewTypes.VIEW3, true, data3, 'replace');
  }

  return (
    <View style={styles.contentContainer}>
      <Text>View 2 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
      <Button title="Replace" onPress={handleReplace} />
    </View>
  )
}

export default View2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    paddingTop: 10,
    alignItems: 'center',
    height: 250
  },
});