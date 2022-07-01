import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const View4 = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentContainer}>
      <Text>View 4 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
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
    flex: 1,
    alignItems: 'center',
  },
});1