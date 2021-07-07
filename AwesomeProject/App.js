import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import AppNavigator from './chatApp/router/router'

const App = () => {
    return (
        <View style={styles.container}>
            <AppNavigator></AppNavigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default App;





