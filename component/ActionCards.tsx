import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCards = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, styles.padding10]}>Action Cards</Text>
      <View style={[styles.cardTop, styles.padding10]}>
        <Text style={[styles.cardheading]}>Visiting HawaMahal</Text>
      </View>
      <View style={[styles.cardMiddle, styles.padding10]}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2018/09/11/17/20/jaipur-3670085__340.jpg',
          }}
          style={styles.card_image}
        />
      </View>
      <View style={[styles.cardBottom, styles.padding10]}>
        <Text numberOfLines={3}>
          The Hawa Mahal is a palace in the city of Jaipur, India. Built from
          red and pink sandstone, it is on the edge of the City Palace, Jaipur,
          and extends to the Zenana, or women's chambers. The structure was
          built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja
          Sawai Jai Singh, the founder of the city of Jaipur, India.[1] He was
          so inspired by the unique structure of Khetri Mahal that he built this
          grand and historical palace.
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com')}
            style={[styles.buttonPrimary, styles.button]}>
            <Text style={[styles.btnText]}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com')}
            style={[styles.buttonPrimary, styles.button]}>
            <Text style={[styles.btnText]}>Buy Ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
  container: {
    padding: 10,
  },
  card_image: {
    width: '100%',
    height: 180,
  },
  btnContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 6,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
  },
  cardTop: {},
  cardMiddle: {
    marginVertical: 10,
  },
  cardBottom: {},
  buttonGrey: {
    backgroundColor: '#555',
  },
  buttonPrimary: {
    backgroundColor: '#079f02',
  },
  padding10: {
    padding: 5,
  },
  cardheading: {
    fontSize: 18,
  },
});
