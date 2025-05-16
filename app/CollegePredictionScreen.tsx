// CollegePredictionScreen.tsx

import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';
import { router } from 'expo-router';
import { images } from '@/constants/images';
import WebView from 'react-native-webview';
import { icons } from '@/constants/icons';
import { useFocusEffect } from 'expo-router';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { fetchPredictionData } from '@/redux/collegePredictorslice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { fetchTrialCount } from '@/redux/trackTrialsSlice';
const CollegePredictionScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showVideo, setShowVideo] = useState(false);
  const { width } = useWindowDimensions();
  const horizontalPadding = 16;
  const contentWidth = width - horizontalPadding * 2;
  const bannerHeight = (184 / 328) * contentWidth;
  const handleTryNow = async () => {
    const resultAction = await dispatch(fetchTrialCount());

    if (fetchTrialCount.fulfilled.match(resultAction)) {
      const updatedTrials = resultAction.payload;

      if (updatedTrials > 0) {
        router.push('/quotaselection');
      } else {
        try {
          const token = await AsyncStorage.getItem('authToken'); // adjust if you use a different auth method

          const response = await fetch('https://mbbs-backend-3.onrender.com/api/plans/purchase', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // assuming you use JWT
            },
            body: JSON.stringify({
              serviceType: 'collegePredictor' // change this if you're offering other plans
            })
          });

          const data = await response.json();

          if (response.ok) {
            alert(`Payment successful! Transaction ID: ${data.transactionId}`);
            // You can navigate or update app state here
          } else {
            alert(`Error: ${data.error}`);
          }

        } catch (error) {
          console.error('Error in payment:', error);
          alert('Something went wrong. Please try again.');
        }
      }
    }
  };
  useFocusEffect(
    useCallback(() => {
      dispatch(fetchTrialCount());
    }, [dispatch])
  );

  const { isLoading, trialsRemaining, isError } = useSelector((state: RootState) => state.trackTrials)
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={{
            position: 'relative',
            width: contentWidth,
            height: bannerHeight,
            marginBottom: 16,
            borderRadius: 4,
            overflow: 'hidden',
          }}>
            {showVideo ? (
              <WebView
                style={styles.video}
                source={{ uri: 'https://www.youtube.com/watch?v=vtd6BLlSy6o' }}
                allowsFullscreenVideo
              />
            ) : (
              <TouchableOpacity onPress={() => setShowVideo(true)} activeOpacity={0.9}>
                <Image source={images.banner} style={styles.thumbnail} />
                <View style={styles.overlay} />
                <Image source={images.youtube} style={styles.youtubeIcon} />
              </TouchableOpacity>
            )}
          </View>

          {/* Description Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Image source={icons.description} /> Description
            </Text>
            <View style={styles.horizontalLine} />
            <View >
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Text style={styles.text}>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </View>

          </View>

        </ScrollView>
        {/* Footer Section */}
        <View style={styles.footer}>
          {trialsRemaining === 100 ? (
            <>
              <View style={styles.priceContainer}>
                <Text style={styles.tax}>You have full access</Text>
                <Text style={[styles.price, { color: 'green' }]}>Premium Unlocked</Text>
              </View>

              <TouchableOpacity
                style={[styles.tryNowButton, { backgroundColor: '#28a745' }]} // green color
                onPress={() => router.push('/quotaselection')}
              >
                <Text style={styles.tryNowText}>Predict College</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={styles.priceContainer}>
                {trialsRemaining === 0 ? (
                  <>
                    <Text style={styles.tax}>Free tier access expired</Text>
                    <Text style={[styles.price, { color: 'red' }]}>
                      Pay now to proceed
                    </Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.tax}>You have</Text>
                    <Text style={styles.price}>{trialsRemaining} free trials</Text>
                  </>
                )}
              </View>

              <TouchableOpacity style={styles.tryNowButton} onPress={handleTryNow}>
                <Text style={styles.tryNowText}>
                  {trialsRemaining === 0 ? 'Pay Now' : 'Try Now'}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>

      </View>
    </SafeAreaView>
  );
};

export default CollegePredictionScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100, // leave space for footer
  },

  title: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 8,
  },
  section: {
    marginTop: 7,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    height: 400,
    borderRadius: 4,
    width: '100%',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 4,
    fontSize: 16,
    flexDirection: 'row',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginVertical: 8,
  },
  text: {
    color: '#111111',
    fontFamily: 'Noto Sans',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0,
    borderColor: '#ECECEC',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
  },
  priceContainer: {
    justifyContent: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tax: {
    color: 'gray',
    fontSize: 12,
  },
  tryNowButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#1E7ED4',
    width: 185,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryNowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  youtubeIcon: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    width: 67,
    height: 41,
    zIndex: 2,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0000005C', // 0.4 is 40% opacity
    zIndex: 1, // Just below YouTube icon which has zIndex: 2
  },
  video: {
    width: '100%',
    height: '100%',
  },
  thumbnailWrapper: {
    position: 'relative',
    width: '100%',
    height: 183,
    marginBottom: 16,
    borderRadius: 4,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 183,
    alignSelf: 'center',
    borderRadius: 4,
    marginBottom: 16,
  },
});
