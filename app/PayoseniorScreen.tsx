import { images } from '@/constants/images';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import PickerField from '@/components/PickerField';
import { useNavigation } from 'expo-router';
const PayToSenior = () => {
  const [form, setForm] = useState({
    college: '',
    state:'',
    choosecollege:'',
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={{ gap: 10 }}>
            <View style={{width:242,height:27}}>
            <Text style={styles.heading}>Get in touch with Senior</Text>
            </View>
            <View style={{width:328,height:50}}>
            <Text style={styles.subHeading}>
              Below is the explained video of how to get in touch with the senior
            </Text>
            </View>
          </View>
          {/* Video */}
          <View style={styles.thumbnailWrapper}>
            <Image source={images.banner} style={styles.thumbnail} />
            <View style={styles.overlay} />

            <Image source={images.youtube} style={styles.youtubeIcon} />
          </View>

          <View>

            <PickerField
              label="Type Of College"
              value={form.college}
              onValueChange={(value) => handleChange('college', value)}
              placeholder="Govt / Private"
              items={[
                { label: 'Government', value: 'government' },
                { label: 'Private', value: 'private' },
              ]}
            />

            <PickerField
              label="Choose State"
              value={form.state}
              onValueChange={(value) => handleChange('state', value)}
              placeholder="Select State"
              items={[
                { label: 'Andhra Pradesh', value: 'andhra_pradesh' },
                { label: 'Telangana', value: 'telangana' },
                { label: 'Karnataka', value: 'karnataka' },
                { label: 'Tamil Nadu', value: 'tamil_nadu' },
                { label: 'Maharashtra', value: 'maharashtra' },
                // Add more states as needed
              ]}
            />

            <PickerField
              label="Choose College"
              value={form.choosecollege}
              onValueChange={(value) => handleChange('choosecollege', value)}
              placeholder="Select College"
              items={[
                { label: 'IIT Bombay', value: 'iit_bombay' },
                { label: 'IIT Delhi', value: 'iit_delhi' },
                { label: 'NIT Warangal', value: 'nit_warangal' },
                { label: 'BITS Pilani', value: 'bits_pilani' },
                // Add more colleges as needed
              ]}
            />

          </View>

        </ScrollView>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹500</Text>
          <Text style={styles.tax}>All Tax included </Text>
        </View>
        <TouchableOpacity style={styles.payNowButton} onPress={()=>{navigation.navigate('SeniorDetailsScreen')}}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PayToSenior;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  scrollContainer: {
    paddingBottom: 100, // leave space for footer
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  subHeading: {
    color: '#797979',
    marginBottom: 12,
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

  thumbnailWrapper: {
    position: 'relative',
    width: '100%',
    height: 183,
    marginBottom: 16,
    borderRadius: 4,
    overflow: 'hidden',
  },
  videoContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  playIconOverlay: {
    position: 'absolute',
    top: '40%',
    left: '45%',
  },
  playIcon: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
    backgroundColor: '#fff',
  },
  priceContainer: {
    justifyContent: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  tax: {
    color: '#888',
    fontSize: 12,
  },
  payNowButton: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 60,
    backgroundColor: '#1E7ED4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  payNowText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
