import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default AirGeneral = ({navigation}) => {
  
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: null,
            title: "Aircondition"
          });
    }, [navigation]);

    return (
    <View style={styles.container}>
      <Text>Air General here!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});