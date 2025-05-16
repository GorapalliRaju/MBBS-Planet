import React, { useRef, useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { images } from '@/constants/images';

const bannerImage = images.banner;

export const BannerCarousel = ({ width, height }: { width: number; height: number }) => {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null); // which image is clicked
  const [autoScroll, setAutoScroll] = useState(true); // control auto-scroll

  const banners = [1, 2, 3]; // can also be array of objects with videoId

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      scrollRef.current?.scrollTo({ x: width * nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, autoScroll]);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <>
      <View style={{ width, height }}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          scrollEnabled={clickedIndex === null} // disable scroll after click
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}
          scrollEventThrottle={16}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        >
          {banners.map((_, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              onPress={() => {
                setClickedIndex(index);
                setAutoScroll(false); // stop auto-scroll
              }}
              style={{ width, height }}
              disabled={clickedIndex !== null} // disable further clicks
            >
              {clickedIndex === index ? (
                <WebView
                  source={{ uri: 'https://www.youtube.com/watch?v=vtd6BLlSy6o' }} // replace with dynamic ID if needed
                  style={{ width: '100%', height: '100%' }}
                  allowsFullscreenVideo
                />
              ) : (
                <>
                  <Image source={bannerImage} style={styles.image(width, height)} />
                  <View style={styles.overlay} />
                  <Image source={images.youtube} style={styles.youtubeIcon} />
                </>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Indicator */}
      <View style={styles.dotContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotBase,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: (width: number, height: number) => ({
    width,
    height,
    borderRadius: 8,
    resizeMode: 'cover',
  }),
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  youtubeIcon: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    width: 67,
    height: 41,
    zIndex: 2,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  dotBase: {
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E3E3E3',
  },
  activeDot: {
    width: 24,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#1E7ED4',
  },
});
