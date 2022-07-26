import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const Task = () => {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <View style={styles.square}>
                    <Text style={styles.num}>01</Text>
                </View>
                <Text style={styles.content}>Lau nha</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task;