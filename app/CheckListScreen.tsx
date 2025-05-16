import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import PickerField from '@/components/PickerField';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import { useWindowDimensions } from 'react-native';
import WebView from 'react-native-webview';

export default function CheckListScreen() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [choiceList, setChoiceList] = useState('');
  const [openPickerId, setOpenPickerId] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const { width } = useWindowDimensions();
  const horizontalPadding = 16;
  const contentWidth = width - horizontalPadding * 2;
  const bannerHeight = (184 / 328) * contentWidth;
  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          'text/csv',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ],
        multiple: false,
        copyToCacheDirectory: true,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const fileName = result.assets[0].name;
        console.log('File Name:', fileName);
        setFileName(fileName);
      }
    } catch (err) {
      console.log('File pick error:', err);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Instruction */}
        <View style={{ gap: 8 }}>
          <Text style={styles.header}>How to use it ?</Text>
          <Text style={styles.subText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </View>

        {/* Video Banner */}
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
              style={{ width: '100%', height: '100%' }}
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

        {/* Checklist Section */}
        <Text style={styles.sectionTitle}>Check Your List</Text>
        <View style={{ height: 30, padding: 2 }}>
          <Text style={{ fontFamily: 'Noto Sans', fontWeight: '600' }}>
            • Please upload your MCC Filling choice here{' '}
            <Text style={{ color: 'red' }}>*</Text>
          </Text>
        </View>

        {/* File Upload Display */}
        <View style={styles.uploadBox}>
          {fileName ? (
            <View style={{ alignItems: 'center', gap: 8 }}>
              <View style={{ flexDirection: 'row', gap: 4, }}>
                <Image source={icons.uploadedicon} />
                <Text style={styles.uploadedFileText}>
                  <Text style={{ fontWeight: '700', fontSize: 16, }}>{fileName}</Text>
                </Text>
              </View>
              <TouchableOpacity onPress={handleFilePick}>
                <Text style={styles.replaceButton}>Replace with another</Text>
              </TouchableOpacity>
              <Text style={styles.uploadSubText}>
                Supported formats: CSV, XLS, XLSX
              </Text>
            </View>
          ) : (
            <TouchableOpacity onPress={handleFilePick}>
              <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                <Image source={icons.upload} style={{ top: 2 }} />
                <Text style={styles.uploadText}>Choose File</Text>
                <Text style={{ color: '#525252', fontSize: 16 }}>to upload </Text>
              </View>
              <Text style={styles.uploadSubText}>
                Supported formats: CSV, XLS, XLSX
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Privacy Note */}
        <View style={{ flexDirection: 'row', width: 300, gap: 4 }}>
          <Image
            source={icons.privacy}
            style={{ width: 16, height: 16, top: 2.5 }}
          />
          <Text style={styles.privacyNote}>
            Please note we do not save your MCC List due to privacy
          </Text>
        </View>

        {/* Compare With My List */}
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontFamily: 'Noto Sans', fontWeight: '600' }}>
            • Compare the list with your choice filled list
          </Text>
        </View>

        <View style={{ marginTop: 6 }}>
          <PickerField
            hideLabel
            value={choiceList}
            onValueChange={(value) => setChoiceList(value)}
            placeholder="Select Choice filling List"
            items={[
              { label: 'Choice List 1', value: 'choice1' },
              { label: 'Choice List 2', value: 'choice2' },
            ]}
            pickerId="choiceFilling"
            isOpen={openPickerId === 'choiceFilling'}
            onToggle={(id) => setOpenPickerId(openPickerId === id ? '' : id)}
          />
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Check With My List</Text>
        </TouchableOpacity>

        {/* Compare With Counselling List */}
        <View style={{ marginTop: 15, gap: 8 }}>
          <Text style={{ fontFamily: 'Noto Sans', fontWeight: '600' }}>
            • Compare the list with the counselling list
          </Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Check With Counselling List</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontWeight: '700',
    fontSize: 20,
  },
  subText: {
    color: '#797979',
    fontSize: 14,
    fontFamily: 'Noto Sans',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#1565C0',
    minHeight: 100,
    borderRadius: 8,
    padding: 12,
    height: 145,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderStyle: 'dashed',
    backgroundColor: '#F8FAFF',
  },
  uploadText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  uploadSubText: {
    fontSize: 12,
    fontFamily: 'Noto Sans',
    color: '#9C9C9C',
    marginTop: 4,
  },
  uploadedFileText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Noto Sans',
  },
  replaceButton: {
    fontSize: 12,
    color: '#007BFF',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  privacyNote: {
    fontSize: 14,
    color: '#5C5C5C',
    fontWeight: '400',
  },
  actionButton: {
    backgroundColor: '#1E7ED4',
    padding: 12,
    borderRadius: 8,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
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
    backgroundColor: '#0000005C',
    zIndex: 1,
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
