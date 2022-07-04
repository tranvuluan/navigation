import { StyleSheet, Text, View, Button, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { AllowCloseBottomSheet, ShowBottomSheet, viewTypes } from '../../../utils/BottomSheet';

const View6 = ({ data, viewOfRoute, actionSheetRef }) => {
  const [fetched, setFetched] = useState();

  useEffect(() => {
    // fetching data
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('timeout');
        resolve();
      }, 3500);
    }).then(res => {
      AllowCloseBottomSheet(viewOfRoute);
      setFetched(true);
    })
    .catch(err => reject(err));

  }, []);


  const dataView = {
    code: 'SG',
    name: 'Singapore'
  }

  const handlePress = () => {
    ShowBottomSheet('Home', viewTypes.VIEW2, dataView, 'push', true);
  }

  return (
    <View style={styles.contentContainer}>
      {fetched ? (<>
        <Text>View 1 🎉</Text>
        <Text>Code: {data.code} - {data.name} 🎉</Text>
        <Button title="Show view2" onPress={handlePress} />
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
          </Text>
        </ScrollView>
      </>) : <ActivityIndicator />}
    </View>
  )
}

export default View6

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    alignItems: 'center',
    height: 350
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
  },
});