import React from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { images } from '@/constants/images';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import WebView from 'react-native-webview';

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);
  const {width}=useWindowDimensions();
  const horizontalPadding = 16;
    const contentWidth = width - horizontalPadding * 2;
    const bannerHeight = (184 / 328) * contentWidth;
  return (
    <View style={styles.bannerContainer}>
      <View style={{position: 'relative',
    width: contentWidth,
    height: bannerHeight,
    marginBottom: 16,
    borderRadius: 4,
    overflow: 'hidden',}}>
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
  video: {
    width: '100%',
    height: '100%',
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