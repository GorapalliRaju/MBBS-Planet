import { Stack } from "expo-router";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import Toast,{BaseToast,ErrorToast} from 'react-native-toast-message';
import './globals.css';
import { images } from "@/constants/images";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { useEffect } from "react";
import CustomToast from "@/components/CustomToast";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded]=useFonts({
    'Zilla-Slab': require('../assets/fonts/ZillaSlab-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Add a 2-second delay before hiding the splash screen
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 2000); // 2000ms = 2 seconds
    }
  }, [fontsLoaded]);


  if(!fontsLoaded)return null;
  
  return (
  <>
  <Stack initialRouteName="splashscreen">
    <Stack.Screen name="splashscreen" options={{headerShown:false}}/>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    <Stack.Screen name="CollegePredictionScreen" options={{
    title: "COLLEGE PREDICTOR",
    headerTitleStyle: {
      width: 183,
      height: 24,
      fontFamily: 'Noto Sans',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }}/>
    <Stack.Screen name="onboarding" options={{headerShown:false}}/>
    <Stack.Screen
  name="login"
  options={{
    title: "THE MBBS PLANET",
    headerTitleStyle: {
      width: 183,
      height: 24,
      fontFamily: 'Noto Sans',  // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }}
/>

    <Stack.Screen name="otp-verification"  options={{
    title: "THE MBBS PLANET",
    headerTitleStyle: {
      width: 183,
      height: 24,
      fontFamily: 'Noto Sans',  // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }}/>
    <Stack.Screen name="selectionScreen" options={{
    title: "",
    headerTitleStyle: {
      width: 183,
      height: 24,
      fontFamily: 'Noto Sans',  // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
  }}/>
    <Stack.Screen name="registration" options={{headerShown:false}} />
    <Stack.Screen name="quotaselection" options={{
    title: "COLLEGE PREDICTOR",
    headerTitleStyle: {
      width: 183,
      height: 24,
      fontFamily: 'Noto Sans', // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }}/>
    <Stack.Screen name="Personalised-Counselling" options={{
    title: "PERSONALISED COUNSELLING",
    headerTitleStyle: {
      width: 183,
      height: 24,
      fontFamily: 'Noto Sans',  // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }}/>
    <Stack.Screen name="PremiumDataAnalysisScreen" options={{
    title: "PREMIUM DATA ANALYSIS",
    headerTitleStyle: {
      width: 183,
      height: 24,
      fontFamily: 'Noto Sans',  // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }}/>
    <Stack.Screen name="ViewContentScreen" options={{
    title: "CONTENT",
    headerTitleStyle: {
      width: 183,
      height: 24,
      fontFamily: 'Noto Sans',  // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }}/>

  <Stack.Screen name="CandidateProfileScreen" options={{
    title: "Candidate Profile",
    headerTitleStyle: {
      width: 183,
      height: 24,
      fontFamily: 'Noto Sans',  // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }}/>

  <Stack.Screen name="PayoseniorScreen" options={{
    title: "PHONE O SENIOR",
    headerTitleStyle: {
      width: 137,
      height: 22,
      fontFamily: 'Noto Sans',  // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }} />

<Stack.Screen name="SeniorDetailsScreen" options={{
    title: "PHONE O SENIOR",
    headerTitleStyle: {
      width: 137,
      height: 22,
      fontFamily: 'Noto Sans',  // Make sure the font is loaded
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20, // Since 100% of 20px
      letterSpacing: 0.02 * 20, // 2% of font size
    },
    headerTitleAlign: 'center',
  }} />

  <Stack.Screen name="ViewPdfScreen"/>
  </Stack>
  <CustomToast />
  </>
  );
}
