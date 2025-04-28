import { Stack } from "expo-router";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import Toast,{BaseToast,ErrorToast} from 'react-native-toast-message';
import './globals.css';
import { images } from "@/constants/images";
// Custom toast config to change position
const toastConfig = {
  success: (props: any) => {
    const screenHeight = Dimensions.get('window').height;

    return (
      <BaseToast
        {...props}
        style={{ 
          //position: 'absolute',
          //top: screenHeight / 2 - 30, // 30 = half of the toast height (you set height: 60)
          alignSelf: 'center',
          borderLeftColor: 'green',
          //height: 60,
          bottom:80,
          width: '80%', // Optional: control toast width
        }}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        text1Style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
        text2Style={{
          fontSize: 15,
          color: 'gray',
        }}
        renderLeadingIcon={() => (
          <Image
            source={images.analytics}
            style={{ width: 30, height: 40 }}
          />
        )}
      />
    );
  },
};

export default function RootLayout() {
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
  <Toast config={toastConfig}/>
  </>
  );
}
