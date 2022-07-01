import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';

const View2 = ({data}) => {

  const data3 = {
    code: 'US',
    name: 'United States'
  }

  // const handleReplace = () => {
  //   replaceBottomSheetModal(dispatch, {
  //     routeName: navigationRef.getCurrentRoute().name,
  //     modal: {
  //       contentView: viewTypes.VIEW3,
  //       data: data3,
  //       isAllowClose: true
  //     }
  //   })
  // }

  return (
    <View style={styles.contentContainer}>
      <Text>View 2 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
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
        alignItems: 'center',
        height: 150
    },
});