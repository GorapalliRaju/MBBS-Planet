import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  Platform,

} from 'react-native';
import { icons } from '@/constants/icons';
import { BannerCarousel } from '@/components/BannerCarousel'
import ServicesSection from '../../components/services';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { fetchUserDetails } from '@/redux/userDetailsslice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const horizontalPadding = 16;
  const contentWidth = width - horizontalPadding * 2;
  const bannerHeight = (184 / 328) * contentWidth;
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, user, isError } = useSelector((state: RootState) => state.userDetails);
  
  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={styles.logoText}>THE MBBS PLANET</Text>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => alert('Go to notifications')}>
          <Image source={icons.notification} style={styles.notificationIcon} />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'left',
      headerStyle: {
        backgroundColor: '#fff',
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingHorizontal: horizontalPadding }]}
        showsVerticalScrollIndicator={false}
      >

        <BannerCarousel width={contentWidth} height={bannerHeight} />

        {/* Services Section */}
        <ServicesSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  scrollContent: {
    paddingBottom: 72,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.4,
    lineHeight: 20,
    fontFamily: 'Zilla-Slab',
    color: '#000000',
  },
  notificationIcon: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
  bannerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 24,
    alignSelf: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
