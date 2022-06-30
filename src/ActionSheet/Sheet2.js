import {View,  Text, StyleSheet} from 'react-native';
import React from "react";
import ActionSheet, { SheetManager,SheetProps,registerSheet } from "react-native-actions-sheet";

function Sheet2(props) {

return <ActionSheet id={props.sheetId}>
  <View style={styles.container}>
    <Text>Sheet2</Text>
  </View>
</ActionSheet>;
}

// Register your Sheet component.
registerSheet('Sheet2', Sheet2);

export default Sheet2;

const styles = StyleSheet.create({
  container: {
    height: 150
  }
})