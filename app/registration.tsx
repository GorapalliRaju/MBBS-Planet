import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import FormField from '../components/FormField';
import PickerField from '../components/PickerField';

export default function RegistrationScreen() {
  const router = useRouter();
  const [openPicker, setOpenPicker] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: '',
    gender: '',
    fathersName: '',
    state: '',
    city: '',
    category: '',
    yearOfPassing12th: '', // Fixed typo from PassinyearOfg12th
    marks12th: '',
    rank: '',
    reservationQuota: '',
    delhiQuota: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      // Log the form data for debugging
      console.log('Form data:', form);
      const jsonBody = JSON.stringify(form);
      console.log('JSON body:', jsonBody);

      const response = await fetch('http://192.168.55.102:7000/api/user/completeProfile', {
        method: 'PATCH',
        body: jsonBody,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json();
      console.log("response", response);

      if (response.ok) {
        console.log('Profile completed:', data);
        router.push('/(tabs)');
      } else {
        console.log('Failed to complete profile:', data.message);
      }
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };

  const handlePickerToggle = (pickerId: string) => {
    setOpenPicker((prev) => (prev === pickerId ? null : pickerId));
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 15 }}>
        <View style={{ maxWidth: 360, alignSelf: 'center', gap: 8 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#111111',
              lineHeight: 24,
            }}
          >
            Enter your details
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#666',
              lineHeight: 20,
              paddingBottom: 15,
            }}
          >
            Lorem esse duis culpa consectetur nulla anim amet aliquip aliqua quis mollit adipisicing.
          </Text>
        </View>

        <FormField
          label="Name"
          placeholder="Enter Name"
          value={form.name}
          onChangeText={(text) => handleChange('name', text)}
        />

        <PickerField
          label="Gender"
          value={form.gender}
          onValueChange={(value) => handleChange('gender', value)}
          placeholder="Select your gender"
          items={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Other', value: 'Other' },
          ]}
          pickerId="gender"
          isOpen={openPicker === 'gender'}
          onToggle={handlePickerToggle}
        />

        <FormField
          label="Father's Name"
          placeholder="Enter father's name"
          value={form.fathersName}
          onChangeText={(text) => handleChange('fathersName', text)}
        />

        <View className="flex-row justify-between gap-3">
          <View className="flex-1 mb-4">
            <PickerField
              label="State"
              value={form.state}
              onValueChange={(value) => handleChange('state', value)}
              placeholder="State"
              items={[
                { label: 'Delhi', value: 'Delhi' },
                { label: 'Maharashtra', value: 'Maharashtra' },
                { label: 'Karnataka', value: 'Karnataka' },
              ]}
              pickerId="state"
              isOpen={openPicker === 'state'}
              onToggle={handlePickerToggle}
            />
          </View>
          <View className="flex-1 mb-4">
            <PickerField
              label="City"
              value={form.city}
              onValueChange={(value) => handleChange('city', value)}
              placeholder="City"
              items={[
                { label: 'Delhi', value: 'Delhi' },
                { label: 'Mumbai', value: 'Mumbai' },
                { label: 'Bangalore', value: 'Bangalore' },
              ]}
              pickerId="city"
              isOpen={openPicker === 'city'}
              onToggle={handlePickerToggle}
            />
          </View>
        </View>

        <PickerField
          label="Category"
          value={form.category}
          onValueChange={(value) => handleChange('category', value)}
          placeholder="Select your category"
          items={[
            { label: 'General', value: 'General' },
            { label: 'OBC', value: 'OBC' },
            { label: 'SC', value: 'SC' },
            { label: 'ST', value: 'ST' },
          ]}
          pickerId="category"
          isOpen={openPicker === 'category'}
          onToggle={handlePickerToggle}
        />

        <FormField
          label="Year of Passing 12th"
          placeholder="Enter the year of passing 12th"
          value={form.yearOfPassing12th}
          onChangeText={(text) => handleChange('yearOfPassing12th', text)}
          keyboardType="numeric"
        />

        <FormField
          label="12th Marks (Expected if no result)"
          placeholder="Enter your 12th marks"
          value={form.marks12th}
          onChangeText={(text) => handleChange('marks12th', text)}
          keyboardType="numeric"
        />

        <FormField
          label="Enter your Rank"
          placeholder="Enter your Rank"
          value={form.rank}
          onChangeText={(text) => handleChange('rank', text)}
          keyboardType="numeric"
        />

        <PickerField
          label="Reservation/Quota(if any)"
          value={form.reservationQuota}
          onValueChange={(value) => handleChange('reservationQuota', value)}
          placeholder="Select the category"
          items={[
            { label: 'None', value: 'None' },
            { label: 'NCC', value: 'NCC' },
            { label: 'PWD', value: 'PWD' },
            { label: 'Sports', value: 'Sports' },
          ]}
          pickerId="reservationQuota" // Fixed pickerId to match field name
          isOpen={openPicker === 'reservationQuota'}
          onToggle={handlePickerToggle}
        />

        <PickerField
          label="Delhi Quota(if any)"
          value={form.delhiQuota}
          onValueChange={(value) => handleChange('delhiQuota', value)}
          placeholder="Select the category"
          items={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          pickerId="delhiQuota"
          isOpen={openPicker === 'delhiQuota'}
          onToggle={handlePickerToggle}
        />

        <TouchableOpacity
          className="bg-[#3182CE] py-4 rounded-xl mt-6 items-center"
          onPress={handleSubmit}
        >
          <Text className="text-white text-base font-semibold">Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}