import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { router } from 'expo-router';
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

const { width } = Dimensions.get('window');
const horizontalPadding = 32; // 16px padding on each side
const bannerWidth = width - horizontalPadding;
const bannerHeight = bannerWidth * 0.56; // Assuming 16:9 ratio
import { files } from '@/utils/helper';
import { fetchPredictionData } from '@/redux/collegePredictorslice';
import { useDispatch, useSelector } from 'react-redux'; // Corrected import
import { RootState, AppDispatch } from '@/redux/store'; // Corrected import

const PremiumDataScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, data, isError } = useSelector(
    (state: RootState) => state.collegePredictor
  );

  useEffect(() => {
    dispatch(fetchPredictionData());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.thumbnailWrapper}>
            <Image source={images.banner} style={styles.thumbnail} />
            <View style={styles.overlay} />

            <Image source={images.youtube} style={styles.youtubeIcon} />
          </View>
          <Text>{data?.message ?? 'No message'}</Text>
          <Text>User ID: {data?.userId ?? 'N/A'}</Text>
          <Text>Time: {data?.timestamp ?? 'N/A'}</Text>
          <Text>Status: {data?.success ? 'Success' : 'Failed'}</Text>


          <View style={styles.section}>
            <View style={{ width: 297 }}>
              <Text style={styles.mainTitle}>
                Premium Data Analysis - AIQ & STATE ALL ROUND
                <Text style={{ color: '#4D4D4D' }}>
                  (2021-2022 COMPARISON)
                </Text>
              </Text>
            </View>
            <View style={{ gap: 5 }}>
              <View style={styles.sectionHeader} className="mt-3 gap-1">
                <Image
                  source={icons.description}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={styles.sectionTitle}>Description</Text>
              </View>
              <View style={styles.horizontalLine} />
              <View style={{ width: 310, height: 110 }}>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </Text>
              </View>
              <View style={styles.sectionHeader} className="mt-3 gap-2">
                <Image
                  source={icons.content}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={styles.sectionTitle}>Content</Text>
              </View>

              <View style={styles.horizontalLine} />
              <View style={{ width: 310, height: 49 }}>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </Text>
              </View>
              <TouchableOpacity
                style={styles.viewContentButton}
                onPress={() =>
                  router.push({
                    pathname: '/ViewContentScreen',
                    params: { files: JSON.stringify(files) },
                  })
                }
              >
                <Text style={styles.viewContentText}>View Content</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Footer fixed at bottom */}
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹500</Text>
            <Text style={styles.tax}>All Tax included </Text>
          </View>
          <TouchableOpacity style={styles.payNowButton}>
            <Text style={styles.payNowText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PremiumDataScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 120, // space for footer
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
  mainTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
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
  title: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    width: 105,
    height: 24,
  },
  icon: {
    width: 20,
    height: 20,
  },
  section: {
    marginTop: 10,
    borderWidth: 1,
    width: '100%',
    height: 450,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 4,
    fontSize: 16,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginTop: 3,
  },
  text: {
    color: '#111111',
    fontFamily: 'Noto Sans',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 10,
  },
  viewContentButton: {
    width: '100%',
    maxWidth: 296,
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1E7ED4',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 17,
    paddingHorizontal: 20,
  },
  viewContentText: {
    color: '#1E7ED4',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  tax: {
    color: '#888787',
    fontSize: 12,
  },
  payNowButton: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 30,
    backgroundColor: '#1E7ED4',
    justifyContent: 'center',
    alignItems: 'center',
    width: 187,
  },
  payNowText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
