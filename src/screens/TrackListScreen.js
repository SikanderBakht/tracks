import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const TrackListScreen = ({navigation}) => {
    return <View>
        <TouchableOpacity
            style={styles.buttonContainer} onPress={() => {
                navigation.navigate('TrackDetail')
            }}>
            <Text style={styles.button}>Go to track detail</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 16
    },
    button: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center'
    }
})

export default TrackListScreen