import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React from 'react';
import { ShowBottomSheet, viewTypes } from '../../../utils/BottomSheet';


const View4 = ({ data, viewOfRoute, actionSheetRef }) => {


  const handlePress = () => {
    const data = {
      code: 'SG',
      name: 'Singapore'
    }
    ShowBottomSheet('Home', viewTypes.VIEW5, true, data, 'push');
  }

  return (
    <View style={styles.contentContainer}>
      <Text>View 4 🎉</Text>
      <Text>Code: {data.code} - {data.name} 🎉</Text>
      <Button title="Push" onPress={handlePress} />
      <ScrollView style={styles.scrollView}
        nestedScrollEnabled={true}
        onMomentumScrollEnd={() =>
          actionSheetRef.current?.handleChildScrollEnd()
        }
      >
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
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
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
  },
});