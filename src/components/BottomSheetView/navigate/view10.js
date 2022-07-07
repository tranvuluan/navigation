import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ShowBottomSheet, viewTypes } from '../../../utils/BottomSheet';


const View10 = ({ data, viewOfRoute, actionSheetRef }) => {
    const navigation = useNavigation();
    const screenDataBS = useSelector(state => state.bottomsheet.bsList.find(bs => bs.routeName === viewOfRoute));

    const handlePress = () => {
        navigation.navigate('About');
    }

    const data9 = {
        code: 'US',
        name: 'United States'
      }

    const handlePress1 = () => {
        ShowBottomSheet('Home', viewTypes.VIEW9, data9, 'push', true);
      }

    return (
        <View style={styles.contentContainer}>
            <Text>View 10 🎉</Text>
            <Text>Code: {data.code} - {data.name} 🎉</Text>
            <ScrollView style={styles.scrollView}
                nestedScrollEnabled={true}
                onMomentumScrollEnd={() =>
                    actionSheetRef.current?.handleChildScrollEnd()
                }
            >
               
                    <View  style={styles.cardItem}>
                        <Text>key: {screenDataBS.key}</Text>
                        <Text>value: {screenDataBS.value}</Text>
                    </View>
           
            </ScrollView>
            <Button style={styles.button} title="Go to About" onPress={handlePress} />
            <Button style={styles.button} title="view 11" onPress={handlePress1} />

        </View>
    )
}

export default View10

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        height: 250,
        alignItems: 'center',
    },

    scrollView: {
    },

    cardItem: {
        marginTop: 5,
        height: 150
    },
    button: {
    },
    image: {
        width: 60,
        height: 60
    }
});