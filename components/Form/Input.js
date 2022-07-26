import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';

const Input = () => {
    return (
        <View style={styles.addTask}>
            <TextInput style={styles.input} />
            <TouchableOpacity>
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Input