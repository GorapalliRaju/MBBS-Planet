import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { onlinePlans } from '@/utils/helper';
import { icons } from '@/constants/icons';

// Define the type for an online plan
interface OnlinePlan {
  name: string;
  price: number;
  benefits: string[];
}

// Define the props type for the component
interface OnlinePlansProps {
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
}

const windowWidth = Dimensions.get('window').width;
const CARD_WIDTH = windowWidth * 0.92;
const CARD_SPACING = 13;

const OnlinePlans = ({ selectedPlan, setSelectedPlan }: OnlinePlansProps) => {
  const flatListRef = useRef<FlatList<OnlinePlan>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(selectedPlan);
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % onlinePlans.length;
      flatListRef.current?.scrollToOffset({
        offset: nextIndex * (CARD_WIDTH + CARD_SPACING),
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSnapScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (CARD_WIDTH + CARD_SPACING));
    setCurrentIndex(index);
    flatListRef.current?.scrollToOffset({
      offset: index * (CARD_WIDTH + CARD_SPACING),
      animated: true,
    });
  };

  return (
    <View>
      <Text style={styles.planSectionTitle}>Online Counselling Plan</Text>
      <View style={styles.onlinePlansContainer}>
        <FlatList
          ref={flatListRef}
          horizontal
          data={onlinePlans}
          keyExtractor={(item: OnlinePlan) => item.name}
          renderItem={({ item }: { item: OnlinePlan }) => (
            <TouchableOpacity
              onPress={() => setSelectedPlan(item.name)}
              style={[
                styles.planCard,
                {
                  borderColor: selectedPlan === item.name ? '#1E7ED4' : '#E6E6E6',
                  backgroundColor: selectedPlan === item.name ? '#F3F9FF' : '#fff',
                  width: CARD_WIDTH,
                  marginRight: CARD_SPACING,
                },
              ]}
            >
              <View style={styles.planHeader}>
                <View style={styles.planTitleContainer}>
                  <Ionicons
                    name={selectedPlan === item.name ? 'radio-button-on' : 'radio-button-off'}
                    size={20}
                    color={selectedPlan === item.name ? '#1E7ED4' : '#C4C4C4'}
                    style={styles.radioIcon}
                  />
                  <View style={styles.planTitleWrapper}>
                    <Text style={styles.planTitle}>{item.name}</Text>
                  </View>
                </View>
                <Text style={styles.planPrice}>₹ {item.price.toLocaleString()}</Text>
              </View>
              <Text style={styles.label}>What will you get</Text>
              {item.benefits.map((benefit, index) => (
                <View key={index} style={styles.benefitRow}>
                  <Image source={icons.checkicon} style={styles.checkIcon} />
                  <Text style={styles.benefitText}>{benefit}</Text>
                </View>
              ))}
            </TouchableOpacity>
          )}
          snapToInterval={CARD_WIDTH + CARD_SPACING}
          snapToAlignment="start"
          decelerationRate="fast"
          onMomentumScrollEnd={handleSnapScroll}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <View style={styles.dotsContainer}>
        {onlinePlans.map((_, index) => (
          <View
            key={index}
            style={[styles.dotBase, currentIndex === index ? styles.activeDot : styles.inactiveDot]}
          />
        ))}
      </View>
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
  onlinePlansContainer: {
    width: CARD_WIDTH + 10,
    overflow: 'hidden',
    alignSelf: 'center',
    marginLeft: 13,
  },
  flatListContent: {
    paddingRight: CARD_SPACING,
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
  planTitleWrapper: {
    width: 79,
    height: 40,
  },
  planTitle: {
    fontFamily: 'Noto Sans',
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
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
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
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

export default OnlinePlans;