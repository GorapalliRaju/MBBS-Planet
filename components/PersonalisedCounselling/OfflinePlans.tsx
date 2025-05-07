import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { plans } from '@/utils/helper';
import { icons } from '@/constants/icons';

// Define the type for an offline plan
interface OfflinePlan {
  name: string;
  price: number;
  benefits: string[];
}

// Define the props type for the component
interface OfflinePlansProps {
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
}

const OfflinePlans = ({ selectedPlan, setSelectedPlan }: OfflinePlansProps) => {
  return (
    <View>
      <Text style={styles.planSectionTitle}>Offline Counselling Plan</Text>
      {plans.map((plan: OfflinePlan) => (
        <TouchableOpacity
          key={plan.name}
          onPress={() => setSelectedPlan(plan.name)}
          style={[
            styles.planCard,
            {
              borderColor: selectedPlan === plan.name ? '#1E7ED4' : '#E6E6E6',
              backgroundColor: selectedPlan === plan.name ? '#F3F9FF' : '#fff',
            },
          ]}
        >
          <View style={styles.planHeader}>
            <View style={styles.planTitleContainer}>
              <Ionicons
                name={selectedPlan === plan.name ? 'radio-button-on' : 'radio-button-off'}
                size={20}
                color={selectedPlan === plan.name ? '#1E7ED4' : '#C4C4C4'}
                style={styles.radioIcon}
              />
              <Text style={styles.planTitle}>{plan.name}</Text>
            </View>
            <Text style={styles.planPrice}>₹ {plan.price.toLocaleString()}</Text>
          </View>
          <Text style={styles.label}>What will you get</Text>
          {plan.benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitRow}>
              <Image source={icons.checkicon} style={styles.checkIcon} />
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  planSectionTitle: {
    width: 165,
    height: 20,
    fontFamily: 'Noto Sans',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    color: '#000000',
  },
  planCard: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
    marginTop: 10,
    height: 440,
    marginBottom: 12,
  },
  planHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  planTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioIcon: {
    marginRight: 10,
  },
  planTitle: {
    fontFamily: 'Noto Sans',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
    width: 164,
  },
  planPrice: {
    fontFamily: 'Noto Sans',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1E7ED4',
  },
  label: {
    marginTop: 10,
    fontFamily: 'Noto Sans',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 20,
    color: '#8B8B8B',
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
    width: 246,
    gap: 3,
    paddingLeft: 4,
  },
  checkIcon: {
    marginTop: 4,
  },
  benefitText: {
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: '#000000',
    flex: 1,
  },
});

export default OfflinePlans;