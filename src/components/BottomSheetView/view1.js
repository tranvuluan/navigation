import { StyleSheet, Text, View, Button, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { AllowCloseBottomSheet, ShowBottomSheet, viewTypes } from './../../utils/BottomSheet';

const View1 = ({ data, viewOfRoute, actionSheetRef }) => {
  const [fetched, setFetched] = useState();


  useEffect(() => {
    // fetching data
    fetch('http://18.218.101.141:5000/api/v1/category')
      .then(response => response.json())
      .then(data => {
        console.log('fetched')
        AllowCloseBottomSheet(viewOfRoute);
        setFetched(true);
      });

  }, []);

  const data2 = {
    code: 'SG',
    name: 'Singapore'
  }

  const handlePress = () => {
    ShowBottomSheet('Home', viewTypes.VIEW2, true, data2, 'push');
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

export default View1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    alignItems: 'center',
    height: 200
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
  },
});