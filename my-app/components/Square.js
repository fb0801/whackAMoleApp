import { StyleSheet, Text, View } from 'react-native';
import React,  {useEffect, useState} from 'react';

const Square = ({time}) => {

    const [moleActive, setMoleActive] = useState(false)

    const randomTime = Math.random() * 20000

    useEffect(() => {
        const timerId = setInterval(() => {
            setMoleActive(true)
            setTimeout(() => {setMoleActive(false)}, 800)
        }, randomTime)
        setTimeout(endGame, time * 1000)
    }, [])

    return (
        <View style={moleActive? styles.mole : styles.square}></View>
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
    mole: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10, 
        backgroundColor: 'blue'
    }
}) 

export default Square

