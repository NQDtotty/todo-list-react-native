import { Text, View, ScrollView } from 'react-native';
import Task from './components/Task';
import styles from './App.components.style';
import Input from './components/Form/Input';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.header}>Todo List</Text>
                <ScrollView style={styles.items}>
                    <Task></Task>
                    <Task></Task>
                </ScrollView>
            </View>
            <Input />
        </View>
    );
}