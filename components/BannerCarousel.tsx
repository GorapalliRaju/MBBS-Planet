import React, { useRef, useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { images } from '@/constants/images';

const bannerImage = images.banner;

export const BannerCarousel = ({ width,height }: { width: number,height:number }) => {
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [1, 2, 3];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      scrollRef.current?.scrollTo({ x: width * nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <>
    <View style={{ width,height }}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ width, height: 200 }}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        {banners.map((_, index) => (
          <Image
            key={index}
            source={bannerImage}
            style={styles.image(width,height)}
          />
        ))}
      </ScrollView>
    </View>
    {/* Indicator Bar */}
    <View style={styles.dotContainer}>
    {banners.map((_, index) => (
      <View
        key={index}
        style={[
          styles.dotBase,
          currentIndex === index
            ? styles.activeDot
            : styles.inactiveDot,
        ]}
      />
    ))}
  </View>
  </>
  );
};

const styles = StyleSheet.create({
  image: (width: number,height:number) => ({
    width,
    height: height,
    borderRadius: 8,
    resizeMode: 'cover',
  }),
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //position: 'absolute',
    marginTop:8,
    bottom: 2,
    width: '100%',
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
