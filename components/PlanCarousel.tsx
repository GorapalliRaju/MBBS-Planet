import React, { useRef, useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { icons } from '@/constants/icons'; // adjust based on your path

const onlinePlans = [
  {
    name: 'Plan A : Personalised Counselling Service',
    price: 8500,
    benefits: [
      'Orientation session via Google Meet',
      'Personalised College List based on individual preferences',
      'List Modification in every round as required',
    ],
  },
  {
    name: 'Plan B : Premium Counselling - Govt./ Private MBBS',
    price: 8500,
    benefits: [
      'All features of Personalised Plan',
      'Communication via Google Meet',
      'Extensive and elaborate support',
    ],
  },
  {
    name: 'Plan C : Karnataka / kerala + Govt. MBBS',
    price: 8500,
    benefits: [
      'All features of Personalised Plan',
      'Communication via Google Meet',
      'Extensive and elaborate support',
    ],
  },
  {
    name: 'Plan D : Multiple Counselling',
    price: 20000,
    benefits: [
      'Security money management',
      'Strategic planning to handle multiple counselling together.',
      'Custom pricing starting from Rs 20000/-',
    ],
  },
];

export const OnlinePlanCarousel = () => {
  const { width: screenWidth } = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={{ width: '100%',padding:12, }}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        {onlinePlans.map((plan, index) => (
          <TouchableOpacity
            key={plan.name}
            onPress={() => setSelectedPlan(plan.name)}
            style={[
              styles.planCard,
              {
                width: screenWidth - 32, // consistent padding
                marginHorizontal: 16,
                borderColor: selectedPlan === plan.name ? '#1E7ED4' : '#E6E6E6',
                backgroundColor:
                  selectedPlan === plan.name ? '#F3F9FF' : '#FFFFFF',
              },
            ]}
          >
            {/* Header Row */}
            <View style={styles.headerRow}>
              <View style={styles.headerLeft}>
                <Ionicons
                  name={
                    selectedPlan === plan.name
                      ? 'radio-button-on'
                      : 'radio-button-off'
                  }
                  size={20}
                  color="#1E7ED4"
                  style={{ marginRight: 10 }}
                />
                <Text style={styles.planTitle}>{plan.name}</Text>
              </View>
              <Text style={styles.planPrice}>₹ {plan.price.toLocaleString()}</Text>
            </View>

            {/* Label */}
            <Text style={styles.label}>What will you get</Text>

            {/* Benefits */}
            {plan.benefits.map((benefit, i) => (
              <View key={i} style={styles.benefitRow}>
                <Image
                  source={icons.checkicon}
                  style={{ marginTop: 4, width: 16, height: 16 }}
                />
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}

            {/* See more */}
            <TouchableOpacity
              style={{
                marginTop: 8,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={styles.moreBenefitsText}>See more benefits</Text>
              <Image
                source={icons.downicon}
                style={{ marginLeft: 4, width: 12, height: 12 }}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Optional Pagination Indicator */}
      <View style={styles.paginationContainer}>
        {onlinePlans.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotBase,
              currentIndex === index
                ? styles.activeDot
                : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  planCard: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
    marginTop: 10,
    height: 240,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  planTitle: {
    fontSize: 14,
    fontWeight: '600',
    flexShrink: 1,
    color: '#222',
  },
  planPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E7ED4',
  },
  label: {
    marginTop: 12,
    fontSize: 13,
    fontWeight: '600',
    color: '#777',
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
    gap: 6,
  },
  benefitText: {
    fontSize: 13,
    flex: 1,
    color: '#333',
  },
  moreBenefitsText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E7ED4',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 6,
  },
  dotBase: {
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E3E3E3',
  },
  activeDot: {
    width: 24,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#1E7ED4',
  },
});
