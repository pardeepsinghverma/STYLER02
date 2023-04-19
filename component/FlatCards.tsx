import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Flat Cards
        </Text>
        <View style={styles.card_container}>
          <View style={[styles.cards, styles.card1]}>
            <Text style={styles.card_text}>Red</Text>
          </View>
          <View style={[styles.cards, styles.card2]}>
            <Text style={styles.card_text}>Green</Text>
          </View>
          <View style={[styles.cards, styles.card3]}>
            <Text style={styles.card_text}>Blue</Text>
          </View>
          <View style={[styles.cards, styles.card1]}>
            <Text style={styles.card_text}>Red</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 24,
  },
  card_container: {
    flex: 1,
    flexDirection: 'row',
  },
  cards: {
    borderRadius: 8,
    alignItems: 'center', 
    justifyContent: 'center',
    width: '22%',
    height: 100,
    margin: '1.5%',
  }, 
  card1: {
    backgroundColor: '#951f1f',
  }, 
  card2: {
    backgroundColor: '#1f6e2b',
  }, 
  card3: {
    backgroundColor: '#1f486e',
  },
  card_text: {
    fontSize: 14,
    fontWeight: '500',
  },
})