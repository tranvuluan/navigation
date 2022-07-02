import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const View5 = ({ data, viewOfRoute, actionSheetRef }) => {
    const navigation = useNavigation();

  return (
    <View style={styles.contentContainer}>
      <Text>View 5 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default View5

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