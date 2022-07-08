import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { GetScreenData, SetScreenData } from '../../../utils/BottomSheet';


const View11 = ({ data, viewOfRoute, actionSheetRef }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const screenData = GetScreenData('About');

    const item = {
        id: 1,
        name: 'Item 1',
        price: '$100',
        image: 'https://picsum.photos/200/300?random=1'
    }

    const handleStoreScreenData = () => {
        SetScreenData('Home', {address: 'Ho Chi Minh'});
        navigation.navigate('Home');
    }

    return (
        <View style={styles.contentContainer}>
            <Text>View 11 🎉</Text>
            <Text>Code: {data.code} - {data.name} 🎉</Text>
            <Text>company: {screenData?.company}</Text>
            <View style={styles.buttonList}>
                <Button style={styles.button} title="Store screen data" onPress={handleStoreScreenData} />
                {/* <Button style={styles.button} title="Go to Home" onPress={() => } /> */}
                <Button style={styles.button} title="Go to Category" onPress={() => navigation.navigate('Category')} />
            </View>
        </View>
    )
}



export default View11

const styles = StyleSheet.create({

    contentContainer: {
        height: 250,
        alignItems: 'center',
    },

    buttonList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
});