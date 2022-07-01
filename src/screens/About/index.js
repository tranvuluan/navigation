import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState, useLayoutEffect, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { changeRoute } from '../../redux/Route/actions';
import { useDispatch } from 'react-redux';

const About = ({navigation, route}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        changeRoute(dispatch, {
          currentRoute: route.name
        })
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>About</Text>
     <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    justifyContent: 'center',
    borderWidth: 1
  }

});