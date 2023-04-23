import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: "Aarav",
            message: "Hey, how's it going?",
            imageUrl: "https://cdn.pixabay.com/photo/2021/04/01/21/25/boy-6143295_960_720.jpg"
        },
        {
            uid: 2,
            name: "Aarya",
            message: "Not too bad, thanks for asking!",
            imageUrl: "https://media.istockphoto.com/id/636173070/photo/smiling-asian-woman-looking-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=tDNlPi0Ae38ZXDjtbQOa_-cciNo25Ty5Nd4z4VCIt8M="
        },
        {
            uid: 3,
            name: "Aarushi",
            message: "What are you up to today?",
            imageUrl: "https://media.istockphoto.com/id/1069408044/photo/young-asian-teen-exercising-in-a-park.jpg?s=2048x2048&w=is&k=20&c=ISri6LN7Vp7RT0BaFe2KQUlzA4UR99T3tF9lnfOVKE0="
        },
        {
            uid: 4,
            name: "Aditya",
            message: "Just finished work for the day!",
            imageUrl: "https://media.istockphoto.com/id/1316451950/photo/smiling-young-boy-of-indian-origin.jpg?s=1024x1024&w=is&k=20&c=zMLKaqVVmmUDMDhIpYF_X6Hd-Tf4B2AZLIBp9G5pxbM="
        },
        {
            uid: 5,
            name: "Alok",
            message: "Any plans for the weekend?",
            imageUrl: "https://media.istockphoto.com/id/1306439127/photo/portrait-of-a-happy-young-boy-of-indian-origin.jpg?s=1024x1024&w=is&k=20&c=CMxkMZawdv5g4vMKaAvi8By9E4e83xJEj2RU4AnwG28="
        },
        {
            uid: 6,
            name: "Amrita",
            message: "I'm going to the beach tomorrow!",
            imageUrl: "https://media.istockphoto.com/id/1325106457/photo/woman-posing-in-public-park.jpg?s=1024x1024&w=is&k=20&c=5Wv8E5tTBkIn1iQzdv9YS6J3dlX90wtSmjrC8siMKu0="
        },
        {
            uid: 7,
            name: "Anjali",
            message: "Did you catch the game last night?",
            imageUrl: "https://media.istockphoto.com/id/133271623/photo/pretty-young-woman-smiling-outdoor-in-the-sunshine.jpg?s=612x612&w=0&k=20&c=Ipx7rAoLCsRlQtEFmsHy_-RmGcXSxdGyB2st8SA0ID8="
        },
        {
            uid: 8,
            name: "Aryan",
            message: "I'm looking forward to the concert next week!",
            imageUrl: "https://cdn.pixabay.com/photo/2021/04/15/10/40/men-6180791_960_720.jpg"
        },
        {
            uid: 9,
            name: "Divya",
            message: "Just finished a great book, anyone have recommendations?",
            imageUrl: "https://media.istockphoto.com/id/133271623/photo/pretty-young-woman-smiling-outdoor-in-the-sunshine.jpg?s=612x612&w=0&k=20&c=Ipx7rAoLCsRlQtEFmsHy_-RmGcXSxdGyB2st8SA0ID8="
        },
        {
            uid: 10,
            name: "Gaurav",
            message: "Can't wait for the new restaurant to open!",
            imageUrl: "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg"
        },
    ];
    return (
        <View style={styles.container}>
            <Text style={[styles.heading, styles.padding10]}>Action Cards</Text>
            <ScrollView
                style={styles.scrollView}
                scrollEnabled={true}
                horizontal={false}
            >
                {contacts.map(({ uid, name, message, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image source={{ uri: imageUrl, }} style={styles.userCardImage} />
                        <View>
                            <Text style={styles.userCardName}>{name}</Text>
                            <Text style={styles.userCardPhone}>{message}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
    },
    container: {
        padding: 10,
    },
    padding10: {
        padding: 5,
    },
    scrollView: {
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: '#222',
        padding: 12,
        borderRadius: 10,
    },
    userCardImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 10,
    },
    userCardName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f7f7f7',
    },
    userCardPhone: {},
})