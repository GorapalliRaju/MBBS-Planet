import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, UseDispatch,useSelector } from 'react-redux';
import { AppDispatch,RootState } from '@/redux/store';
import { fetchUserDetails } from '@/redux/userDetailsslice';
interface PlanDetails {
  name: string;
  price: number;
  benefits: string[];
}

type RootStackParamList = {
  PayoseniorScreen: undefined;
  CollegeListScreen: undefined;
  PaymentScreen: { selectedPlan: PlanDetails | undefined };
};

interface PaySectionProps {
  selectedPlanDetails: PlanDetails | undefined;
  navigation: NavigationProp<RootStackParamList>;
}

const PaySection = ({ selectedPlanDetails, navigation }: PaySectionProps) => {
   const dispatch=useDispatch<AppDispatch>();
  const handlePayment = async () => {
    const token=await AsyncStorage.getItem('authToken');
    if (!token) {
    Alert.alert('Auth Error', 'Please login to continue.');
    return;
  }
    if (!selectedPlanDetails) {
      Alert.alert('No plan selected');
      return;
    }

    const serviceType = getServiceKey(selectedPlanDetails.name);

    try {
      const response = await fetch('https://mbbs-backend-3.onrender.com/api/plans/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Replace with real token from AsyncStorage or context
        },
        body: JSON.stringify({ serviceType }),
      });

      const data = await response.json();
      console.log(data);
      console.log(serviceType);
      if (!response.ok) {
        throw new Error(data.error || 'Payment failed');
      }

      Alert.alert('Payment Successful', `Transaction ID: ${data.transactionId}`);
      //navigation.navigate('PaymentScreen', { selectedPlan: selectedPlanDetails });
      await dispatch(fetchUserDetails()).unwrap();

    } catch (error: any) {
      Alert.alert('Payment Error', error.message);
    }
  };

  const getServiceKey = (planName: string) => {
    if (planName === 'Offline Plan') return 'Offline_Plan';
    if (planName === 'Freedom Plan') return 'Freedom_Plan';
    if (planName.includes('Plan A')) return 'Online_Plan_A';
    if (planName.includes('Plan B')) return 'Plan_B';
    if (planName.includes('Plan C')) return 'Plan_C';
    if (planName.includes('Plan D')) return 'Plan_D';
    return planName.replace(/\s/g, '_');
  };

  return (
    <View style={styles.paySection}>
      <View>
        <Text style={styles.payAmount}>₹{selectedPlanDetails?.price}</Text>
        <Text style={styles.taxText}>All Tax Included</Text>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paySection: {
    marginTop: 24,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  payAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  taxText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  payButton: {
    backgroundColor: '#1E7ED4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    width: 185,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PaySection;
