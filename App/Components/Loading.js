import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'

const Loading = ({ loading, children }) => {
    if (loading) {
        return (
            <View styles={styles.container}>
                <ActivityIndicator size='large' color='blue' />
            </View>
        );
    }
    return children    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loading



