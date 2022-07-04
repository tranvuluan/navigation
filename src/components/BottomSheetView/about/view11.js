import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { addToCart } from '../../../redux/Cart/actions';
import { useDispatch } from 'react-redux';


const View11 = ({ data, viewOfRoute, actionSheetRef }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handlePress = () => {
        navigation.navigate('Home');
    }

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
            <Button title="AddToCart" onPress={handleAddToCart} />
            <Button title="Go to Home" onPress={handlePress} />
        </View>
    )
}

export default View11

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
});