import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const ResultsScreen = () => {
    const params = useLocalSearchParams();
    const collegesParam = params.colleges;

    let collegeName = 'No college name found';
    let fees = 'no fees found';
    let seatsAvailable = 'no seats';
    let category = 'no category';
    let state = '';
    if (typeof collegesParam === 'string') {
        try {
            // Decode URI-encoded string
            const decoded = decodeURIComponent(collegesParam);

            // Optional: Remove trailing malformed characters like ")]"
            const cleaned = decoded.replace(/\)\]$/, '');

            // Parse JSON string
            const collegesArray = JSON.parse(cleaned);

            // Extract college name
            collegeName = collegesArray[0]?.name || 'No name found';
            fees = collegesArray[0]?.fees;
            seatsAvailable = collegesArray[0]?.seatsAvailable;
            category = collegesArray[0]?.category;
            state = collegesArray[0]?.state;
            console.log("College Name:", collegeName);
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error parsing colleges:", error.message);
            } else {
                console.error("Unknown error:", error);
            }
        }
    } else {
        console.warn('Expected colleges to be a string, but got:', typeof collegesParam);
    }

    return (
        <View style={styles.container}>
            <Text>College Name: {collegeName}</Text>
            <Text>Fees:{fees}</Text>
            <Text>seatsAvailable:{seatsAvailable}</Text>
            <Text>category:{category}</Text>
            <Text>State:{state}</Text>
        </View>
    );
};

export default ResultsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
