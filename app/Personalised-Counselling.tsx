import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Banner from '@/components/Banner';
import FeaturesSection from '@/components/PersonalisedCounselling/FeaturesSection';
import PlansSection from '@/components/PersonalisedCounselling/PlansSection';
import PaySection from '@/components/PersonalisedCounselling/PaySection';
import { plans,onlinePlans,miniSection } from '@/utils/helper';
interface Plan {
  name: string;
  price: number;
  benefits: string[];
}

 type RootStackParamList = {
  PayoseniorScreen: undefined;
  CollegeListScreen: undefined;
  PaymentScreen: { selectedPlan: Plan | undefined };
};

const PersonalisedCounsellingScreen = () => {
  const allPlans: Plan[] = [...plans, ...onlinePlans, ...miniSection];
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedPlan, setSelectedPlan] = useState<string>('Offline Plan');
  const selectedPlanDetails = allPlans.find((plan: Plan) => plan.name === selectedPlan);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Banner />
        <FeaturesSection navigation={navigation} />
        <PlansSection 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
          navigation={navigation}
        />
        <PaySection 
          selectedPlanDetails={selectedPlanDetails} 
          navigation={navigation} 
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollContainer: {
    paddingBottom: 10,
  },
});

export default PersonalisedCounsellingScreen;