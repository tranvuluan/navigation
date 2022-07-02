import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ShowBottomSheet, viewTypes } from '../../utils/BottomSheet';


const View4 = ({ data, viewOfRoute, actionSheetRef }) => {
  const navigation = useNavigation();

  const data3 = {
    code: 'US',
    name: 'United States'
  }

  const handlePress = () => {
    ShowBottomSheet('About', viewTypes.VIEW5, true, data3, 'replace');
  }
  return (
    <View style={styles.contentContainer}>
      <Text>View 4 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
      <Button  title="Go to Home" onPress={() => navigation.navigate('Home') } />
      <Button  title="View3" onPress={handlePress} />
    </View>
  )
}

export default View4

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
});1