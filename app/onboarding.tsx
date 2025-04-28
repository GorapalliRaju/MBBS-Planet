import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { images } from '@/constants/images';
import Toast from 'react-native-toast-message';
export default function Onboarding() {
  useEffect(()=>{
    Toast.show({
      type:'success',
      text1: 'Thank you!',
      text2: 'Thanks for using our app 🎉',
      position: 'bottom', // Or you can use absolute positioning
      visibilityTime: 3000, // 3 seconds
    })
  },[])
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const handleGetStarted = () => {
    router.push('/login');
  };

  const buttonWidth = width > 360 ? 328 : width * 0.9;
  const imageHeight = height * 0.3;
  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={[styles.container, { paddingTop: height * 0.06 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Onboarding Image */}
        <Image
          source={images.onboarding}
          resizeMode="contain"
          style={[styles.image, { width: width * 0.85, height: imageHeight }]}
        />

        {/* Title & Description */}
        <View style={[styles.textContainer, { width: width * 0.9 }]}>
          <Text style={styles.title}>THE MBBS PLANET</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur</Text>
            <Text style={styles.description}>adipiscing elit, sed do eiusmod tempor</Text>
            <Text style={styles.description}>incididunt ut labore et dolore magna.</Text>
          </View>

        </View>
      </ScrollView>

      {/* Get Started Button */}
      <TouchableOpacity
        style={[styles.button, { width: buttonWidth, bottom: 40 }]}
        onPress={handleGetStarted}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100, // allow room for the button
  },
  image: {
    // Removed marginBottom to prevent large gap
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginTop: 24,
  },
  title: {
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'center',
    color: '#000000',
    fontFamily:'Noto Sans',
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  description: {
    fontFamily: 'Noto Sans',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center',
    color: '#000000',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#1E7ED4',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
