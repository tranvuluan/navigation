import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { addToCart } from '../../../redux/Cart/actions';
import { useDispatch } from 'react-redux';


const View11 = ({ data, viewOfRoute, actionSheetRef }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const item = {
        id: 1,
        name: 'Item 1',
        price: '$100',
        image: 'https://picsum.photos/200/300?random=1'
    }

    const handleAddToCart = () => {
        addToCart(dispatch, item);
    }

    return (
        <View style={styles.contentContainer}>
            <Text>View 11 🎉</Text>
            <Text>Code: {data.code} - {data.name} 🎉</Text>
            <View style={styles.buttonList}>
                <Button style={styles.button} title="AddToCart" onPress={handleAddToCart} />
                <Button style={styles.button} title="Go to Home" onPress={() => navigation.navigate('Home')} />
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