import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { images } from '@/constants/images';

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.thumbnailWrapper}>
        <Image source={images.banner} style={styles.thumbnail} />
        <View style={styles.overlay} />
        <Image source={images.youtube} style={styles.youtubeIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    padding: 16,
  },
  thumbnailWrapper: {
    position: 'relative',
    width: '100%',
    height: 183,
    marginBottom: 0,
    borderRadius: 4,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 183,
    alignSelf: 'center',
    borderRadius: 4,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0000005C',
    zIndex: 1,
  },
  youtubeIcon: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    width: 67,
    height: 41,
    zIndex: 2,
  },
});

export default Banner;