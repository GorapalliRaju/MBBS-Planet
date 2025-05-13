import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import PickerField from '@/components/PickerField';
import { images } from '@/constants/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Plan {
  name: string;
  price: number;
  benefits: string[];
}
type SeniorDetailsParams = {
  senior: {
    name: string;
    email: string;
    phone: string;
    college: string;
    state: string;
    typeofCollege: string;
    about: string;
    // add any other fields returned by API
  };
};

type RootStackParamList = {
  PayoseniorScreen: undefined;
  CollegeListScreen: undefined;
  PaymentScreen: { selectedPlan: Plan | undefined };
  SeniorDetailsScreen:SeniorDetailsParams; // Add SeniorDetailsScreen
};
const PayToSenior = () => {
  const [form, setForm] = useState({
    college: '',
    state: '',
    choosecollege: '',
  });

  const [openPickerId, setOpenPickerId] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };
   //route for getting senior details
  /*async () => {
            try {
              const queryParams = new URLSearchParams({
                typeofCollege: 'Private',
                state: 'Andhra Pradesh',
                college: 'IIT Bombay',
              });
              const token=await AsyncStorage.getItem('authToken');
              const response = await fetch(`https://mbbs-backend-3.onrender.com/api/seniors/getSenior?${queryParams}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`, // Replace with your real token
                },
              });

              const data = await response.json();

              if (response.ok) {
                console.log('Senior found:', data);
                navigation.navigate('SeniorDetailsScreen', { senior: data });
              } else {
                alert(data.message || 'Failed to fetch senior.');
              }
            } catch (error) {
              console.error('Error:', error);
              alert('Something went wrong. Please try again.');
            }
          }*/

  const togglePicker = (pickerId: string) => {
    setOpenPickerId(prev => (prev === pickerId ? null : pickerId));
  };

  const handlePayNow = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken'); // or use your own auth system

    const response = await fetch('https://mbbs-backend-3.onrender.com/api/plans/purchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        serviceType: 'callSenior' // <-- key part for your need
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(`✅ Payment successful! Unlocked services: ${data.unlockedServices.join(', ')}`);
      // Optionally navigate or reload data here
    } else {
      alert(`❌ Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Payment error:', error);
    alert('⚠️ Something went wrong. Please try again later.');
  }
};


  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={{ gap: 10 }}>
            <View style={{ width: 242, height: 27 }}>
              <Text style={styles.heading}>Get in touch with Senior</Text>
            </View>
            <View style={{ width: 328, height: 50 }}>
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
              pickerId="college"
              isOpen={openPickerId === 'college'}
              onToggle={togglePicker}
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
              ]}
              pickerId="state"
              isOpen={openPickerId === 'state'}
              onToggle={togglePicker}
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
              ]}
              pickerId="choosecollege"
              isOpen={openPickerId === 'choosecollege'}
              onToggle={togglePicker}
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
        <TouchableOpacity
          style={styles.payNowButton}
          onPress={handlePayNow}
        >
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

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
    paddingBottom: 100,
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
    height: 200,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'column',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A202C',
  },
  tax: {
    fontSize: 12,
    color: '#718096',
  },
  payNowButton: {
    backgroundColor: '#3182CE',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  payNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PayToSenior;