import { icons } from '@/constants/icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { exams } from '@/utils/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SelectionScreen = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const { width } = useWindowDimensions();

  
    const handleContinue = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken'); // retrieve auth token

        if (!token) {
          alert('User not authenticated');
          return;
        }

        const response = await fetch('http://192.168.55.104:7000/api/user/chooseExam', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // assuming Bearer token authentication
          },
          body: JSON.stringify({ exam: selectedExam }),
        });

        const data = await response.json();

        console.log('API Response:', data);

        if (data.success) {
          router.push('/registration'); // proceed if success
        } else {
          alert(data.message || 'Something went wrong');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to connect to server');
      }
    };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 30 : 20,
        paddingBottom: 20,
        paddingHorizontal: 16,
      }}
    >
      {/* Header */}
      <View style={{ maxWidth: 360, alignSelf: 'center', gap: 8 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#111111',
            lineHeight: 24,
          }}
        >
          Select Your Exam
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: '#666',
            lineHeight: 20,
          }}
        >
          Lorem esse duis culpa consectetur nulla anim amet aliquip aliqua quis mollit adipisicing.
        </Text>
      </View>

      {/* Exam Options */}
      <ScrollView
        style={{ flex: 1, marginTop: 24 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
          alignItems: 'center',
        }}
      >
        {exams.map((exam, index) => {
          const isSelected = selectedExam === exam;
          const isPreHighlighted = exam === 'NEET - UG' && !isSelected;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedExam(exam)}
              style={{
                width: '100%',
                maxWidth: 360,
                height: 54,
                paddingHorizontal: 16,
                borderRadius: 14,
                marginBottom: 12,
                backgroundColor: isSelected
                  ? '#F1F7FC'
                  : isPreHighlighted
                    ? '#FFFFFF'
                    : '#F5F5F5',
                borderWidth: 1,
                borderColor: isSelected
                  ? '#1976D2'
                  : isPreHighlighted
                    ? '#000000'
                    : 'transparent',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: isSelected
                    ? '#111111'
                    : isPreHighlighted
                      ? '#000000'
                      : '#9E9E9E',
                }}
              >
                {exam}
              </Text>

              {isSelected && (
                <Image
                  source={icons.checkimage}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          );
        })}

      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity
        disabled={!selectedExam}
        onPress={handleContinue}
        style={{
          height: 50,
          width: '100%',
          maxWidth: 360,
          alignSelf: 'center',
          borderRadius: 12,
          backgroundColor: selectedExam ? '#1E7ED4' : '#BDBDBD',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 16, fontFamily: 'Roboto' }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectionScreen;
