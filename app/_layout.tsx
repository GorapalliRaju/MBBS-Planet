import { Stack } from "expo-router";
import './globals.css';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { useEffect } from "react";
import CustomToast from "@/components/CustomToast";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "@/redux/store";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
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


  if (!fontsLoaded) return null;

  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <Stack initialRouteName="splashscreen">
          <Stack.Screen name="splashscreen" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="CollegePredictionScreen" options={{
            title: "COLLEGE PREDICTOR",
            headerTitleStyle: {
              fontFamily: 'Noto Sans',
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen
            name="login"
            options={{
              title: "THE MBBS PLANET",
              headerTitleStyle: {


                fontFamily: 'Noto Sans',  // Make sure the font is loaded
                fontWeight: '600',
                fontSize: 20,

              },
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen name="otp-verification" options={{
            title: "THE MBBS PLANET",
            headerTitleStyle: {

              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="selectionScreen" options={{
            title: "",
            headerTitleStyle: {

              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 20,

            },
          }} />
          <Stack.Screen name="registration" options={{ headerShown: false }} />
          <Stack.Screen name="quotaselection" options={{
            title: "COLLEGE PREDICTOR",
            headerTitleStyle: {
              fontFamily: 'Noto Sans', // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="Personalised-Counselling" options={{
            title: "PERSONALISED COUNSELLING",
            headerTitleStyle: {
              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="PremiumDataAnalysisScreen" options={{
            title: "PREMIUM DATA ANALYSIS",
            headerTitleStyle: {
              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name="ViewContentScreen" options={{
            title: "CONTENT",
            headerTitleStyle: {
              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />

          <Stack.Screen name="CandidateProfileScreen" options={{
            title: "Candidate Profile",
            headerTitleStyle: {
              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />

          <Stack.Screen name="PayoseniorScreen" options={{
            title: "PHONE O SENIOR",
            headerTitleStyle: {
              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />

          <Stack.Screen name="SeniorDetailsScreen" options={{
            title: "PHONE O SENIOR",
            headerTitleStyle: {
              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />


          <Stack.Screen name="CollegeListScreen" options={{
            title: "COLLEGE LIST",
            headerTitleStyle: {
              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />

          <Stack.Screen name="CheckListScreen" options={{
            title: "COLLEGE LIST",
            headerTitleStyle: {
              fontFamily: 'Noto Sans',  // Make sure the font is loaded
              fontWeight: '600',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }} />

          <Stack.Screen name="ViewPdfScreen" />
        </Stack>
        <CustomToast />
      </Provider>
    </>
  );
}
