import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{uri: 'https://cdn.pixabay.com/photo/2018/09/11/17/20/jaipur-3670085__340.jpg'}} style={styles.cardImage} />
        <View style={styles.cardText}>
            <Text style={styles.cardHeading}>Hawa Mahal</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    heading: {
        fontSize: 24,
    },
    card: {
        marginTop: 10,
        backgroundColor: '#222',
    },
    cardElevated: {
        borderRadius: 10,
    },
    cardImage: {
        width: '100%',
        height:180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardText: {
        padding: 12,
    },
    cardHeading: {
        fontSize: 18,
        marginTop: 6,
    },
    cardDescription: {
        fontSize: 14,
        marginTop: 6,
    },
    cardFooter: {
        fontSize: 14,
        marginTop: 6,
        marginBottom: 10,
    },
})