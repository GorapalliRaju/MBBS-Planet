import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { images } from '@/constants/images';

const { width, height } = Dimensions.get('window');

export default function Splashscreen() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/onboarding');
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <LinearGradient
            colors={['#05D2FF', '#3787E6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />


            {/* Centered logo/icon */}
            <Image
                source={images.splashicon} // centered white logo
                style={styles.logo}
                resizeMode="contain"
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundOverlay: {
        position: 'absolute',
        width: width * 1.4,
        height: width * 1.4,
        top: -height * 0.15,
        left: -width * 0.2,
        opacity: 0.2, // softer background effect
    },
    logo: {
        width: width*0.6,
        height: width*0.6,
        marginBottom: 30,
        zIndex: 2,
    },
    brandText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
        zIndex: 2,
        textShadowColor: '#00000033',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
});
