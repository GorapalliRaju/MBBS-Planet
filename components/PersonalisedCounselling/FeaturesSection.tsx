import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { features } from '@/utils/helper';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
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

// Define the type for a feature
interface Feature {
  title: string;
  description: string;
  image: any; // Use ImageSourcePropType if possible
}

interface FeaturesSectionProps {
  navigation: NavigationProp<RootStackParamList>;
}

const FeaturesSection = ({ navigation }: FeaturesSectionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Image source={icons.whatuget} />
          <Text style={styles.sectionHeading}>What you will get</Text>
        </View>
        <View style={styles.horizontalLine} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.featuresContainer}>
            {features.map((item: Feature, index: number) => (
              <View key={index} style={styles.featureCard}>
                <View style={styles.iconBackground}>
                  <View style={styles.iconContainer}>
                    <Image source={item.image} style={styles.featureIcon} resizeMode="contain" />
                    {item.title === 'Phone - O - Senior' && (
                      <View style={styles.innerIconWrapper}>
                        <Image
                          source={images.insideofphonosenior}
                          style={styles.innerIcon}
                          resizeMode="contain"
                        />
                      </View>
                    )}
                  </View>
                </View>
                <View style={styles.contentContainer}>
                  <Text style={styles.featureTitle}>{item.title}</Text>
                  <Text style={styles.featureDesc}>{item.description}</Text>
                </View>
                <TouchableOpacity
                  style={styles.knowMoreButton}
                  onPress={() => {
                    if (item.title === 'Phone - O - Senior') navigation.navigate('PayoseniorScreen');
                    if (item.title === 'College List') navigation.navigate('CollegeListScreen');
                    if (item.title === 'Premium Data') navigation.navigate('PremiumDataAnalysisScreen');
                    if (item.title === 'Candidate Profile') navigation.navigate('CandidateProfileScreen')
                    if (item.title === 'College Prediction') navigation.navigate('CollegePredictionScreen')
                    if (item.title === 'Check Your List') navigation.navigate('CheckListScreen')
                  }}
                >
                  <Text style={styles.knowMoreText}>Know More</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 0,
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
  scrollContent: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  featuresContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  featureCard: {
    width: 162,
    height: 223,
    borderRadius: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 0.5,
    justifyContent: 'space-between',
    borderColor: '#E6E6E6',
  },
  iconBackground: {
    width: 160,
    height: 73,
    backgroundColor: '#F3F9FF',
    borderRadius: 2.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'relative',
  },
  featureIcon: {
    width: 56,
    height: 56,
  },
  innerIconWrapper: {
    position: 'absolute',
    top: 18.51,
    left: 22.99,
    transform: [{ rotate: '350deg' }],
    borderWidth: 0.1,
    borderColor: '#60B7FF',
    borderRadius: 4,
  },
  innerIcon: {
    width: 9.75,
    height: 9.25,
    tintColor: '#60B7FF',
  },
  contentContainer: {
    width: 128,
    height: 72,
    marginLeft: 12,
    justifyContent: 'center',
  },
  featureTitle: {
    fontFamily: 'Noto Sans',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    color: '#000000',
    textAlign: 'left',
    marginBottom: 4,
  },
  featureDesc: {
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#000000',
    textAlign: 'left',
  },
  knowMoreButton: {
    width: 138,
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1E7ED4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  knowMoreText: {
    fontFamily: 'Noto Sans',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: '#1E7ED4',
  },
});

export default FeaturesSection;