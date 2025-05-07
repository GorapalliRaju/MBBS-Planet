import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// Define the type for plan details
interface PlanDetails {
  name: string;
  price: number;
  benefits: string[];
}

// Define the navigation param list for the stack
type RootStackParamList = {
  PayoseniorScreen: undefined;
  CollegeListScreen: undefined;
  PaymentScreen: { selectedPlan: PlanDetails | undefined };
};

// Define the props type for the component
interface PaySectionProps {
  selectedPlanDetails: PlanDetails | undefined;
  navigation: NavigationProp<RootStackParamList>;
}

const PaySection = ({ selectedPlanDetails, navigation }: PaySectionProps) => {
  return (
    <View style={styles.paySection}>
      <View>
        <Text style={styles.payAmount}>₹{selectedPlanDetails?.price}</Text>
        <Text style={styles.taxText}>All Tax Included</Text>
      </View>
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate('PaymentScreen', { selectedPlan: selectedPlanDetails })}
      >
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