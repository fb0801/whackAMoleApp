import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Square = () => {
    return (
        <View style={styles.square}></View>
    )
}

const styles = StyleSheet.create({
    square: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10, 
        backgroundColor: 'red'
    },
}) 

export default Square

