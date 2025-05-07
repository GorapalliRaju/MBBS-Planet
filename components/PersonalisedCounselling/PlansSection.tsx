import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import OfflinePlans from './OfflinePlans';
import OnlinePlans from './OnlinePlans';
import MiniSessionPlans from './MiniSessionPlans';
import { icons } from '@/constants/icons';

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
interface PlansSectionProps {
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  navigation: NavigationProp<RootStackParamList>;
}

const PlansSection = ({ selectedPlan, setSelectedPlan, navigation }: PlansSectionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image source={icons.chooseplan} />
          <Text style={styles.sectionHeading}>Choose Your Plan</Text>
        </View>
        <View style={styles.horizontalLine} />
        <OfflinePlans 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
        />
        <OnlinePlans 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
        />
        <MiniSessionPlans 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '600',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginVertical: 8,
  },
});

export default PlansSection;