import {View,  Text, StyleSheet, Button} from 'react-native';
import React from "react";
import ActionSheet, { SheetManager,SheetProps,registerSheet } from "react-native-actions-sheet";

function MySheet(props) {

return <ActionSheet 
        id={props.sheetId}
        indicatorStyle={{backgroundColor: 'tomato'}}
        >
  <View style={styles.container}>
    <Text>Hello World</Text>
    <Button title="show sheet2" onPress={() => SheetManager.show('Sheet2')} />
  </View>
</ActionSheet>;
}

// Register your Sheet component.
registerSheet('mysheet', MySheet);

export default MySheet;

const styles = StyleSheet.create({
  container: {
    height: 200
  }
})