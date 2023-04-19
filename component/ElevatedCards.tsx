import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
        <View style={styles.container}>
            <Text style={styles.heading}>
                Flat Cards
            </Text>
            <ScrollView horizontal scrollEnabled={true} style={styles.card_container}>
                
                <View style={[styles.cards, styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.cards, styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.cards, styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.cards, styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.cards, styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.cards, styles.card1]}>
                    <Text>Red</Text>
                </View>

            </ScrollView>
        </View>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    heading: {
        fontSize: 24,
    },
    card_container: {
        height: 120,
        paddingVertical: 8,
    },
    cards: {
        borderRadius: 8,
        alignItems: 'center', 
        justifyContent: 'center',
        width: 100,
        height: 100,
        marginHorizontal: 8,
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#000',
        
    }, 
    card1: {
        backgroundColor: '#0e0e0e',
    },
})