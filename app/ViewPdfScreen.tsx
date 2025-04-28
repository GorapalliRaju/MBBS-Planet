import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';

export const ViewPdfScreen = () => {
  const { url } = useLocalSearchParams();

  const pdfUrl = encodeURIComponent(url as string);
  const googleViewerUrl = `https://docs.google.com/gview?embedded=true&url=${pdfUrl}`;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: googleViewerUrl }}
        style={{ flex: 1 }}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

export default ViewPdfScreen;
