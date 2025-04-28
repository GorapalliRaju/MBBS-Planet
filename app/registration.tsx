// screens/RegistrationScreen.tsx
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

  const [form, setForm] = useState({
    name: '',
    gender: '',
    fatherName: '',
    state: '',
    city: '',
    category: '',
    passingYear: '',
    marks: '',
    rank: '',
    quota: '',
    delhiQuota: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log(form);
    router.push('/(tabs)');
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 64 }}>
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
                    paddingBottom:15,
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
        />

        <FormField
          label="Father's Name"
          placeholder="Enter father's name"
          value={form.fatherName}
          onChangeText={(text) => handleChange('fatherName', text)}
        />

        <View className="flex-row justify-between gap-3">
          <View className="flex-1 mb-4 ">
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
        />

        <FormField
          label="Year of Passing 12th"
          placeholder="Enter the year of passing 12th"
          value={form.passingYear}
          onChangeText={(text) => handleChange('passingYear', text)}
          keyboardType="numeric"
        />

        <FormField
          label="12th Marks (Expected if no result)"
          placeholder="Enter your 12th marks"
          value={form.marks}
          onChangeText={(text) => handleChange('marks', text)}
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
              value={form.quota}
              onValueChange={(value) => handleChange('quota', value)}
              placeholder="Select the category"
              items={[
                { label: 'None', value: 'None' },
                { label: 'NCC', value: 'NCC' },
                { label: 'PWD', value: 'PWD' },
                { label: 'Sports', value: 'Sports' },
              ]}
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
