import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import { useNavigation } from 'expo-router';
import { miniSection, features, plans, onlinePlans } from '@/utils/helper';


const windowWidth = Dimensions.get('window').width;
const CARD_WIDTH = windowWidth * 0.83;
const CARD_SPACING = 13;
const horizontalPadding = 16;
const contentWidth = windowWidth - horizontalPadding * 2;
const cardWidth = windowWidth * 0.8;
const cardSpacing = 10;
const PersonalisedCounsellingScreen = () => {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState('Offline');
  const scrollRef = useRef();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleSnapScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
  const index = Math.round(offsetX / (CARD_WIDTH + CARD_SPACING));
  setCurrentIndex(index);

  flatListRef.current?.scrollToOffset({
    offset: index * (CARD_WIDTH + CARD_SPACING),
    animated: true,
  });
  };

  const selectedPlanDetails = plans.find((plan) => plan.name === selectedPlan);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={{ width: '100%', padding: 16, }}>
          <View style={styles.thumbnailWrapper}>
            <Image source={images.banner} style={styles.thumbnail} />
            <View style={styles.overlay} />

            <Image source={images.youtube} style={styles.youtubeIcon} />
          </View>
        </View>
        {/* Title */}
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ borderWidth: 1, width: '100%', borderColor: '#ffffff', backgroundColor: 'white' }}>
            <View style={styles.section}>
              <View style={{width:297,height:44}}>
              <Text style={styles.mainTitle}>
                Premium Data Analysis - AIQ & STATE ALL ROUND<Text style={{color:'#4D4D4D'}}>(2021-2022 COMPARISON)</Text>
              </Text>
              </View>
            </View>

            {/* Description Section */}
            <View style={styles.section}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, }}>
                <Image source={icons.description} />
                <Text style={styles.sectionHeading}>
                  Description
                </Text>
              </View>
              <View style={styles.horizontalLine} />
              <Text style={styles.text}>
                Get access to deep-dive analytics, personalized insights, and verified trends from past counselling data. Our guidance includes AIQ & state-wise comparisons, helping you identify the best-fit colleges and avoid common counselling mistakes.
              </Text>
            </View>

            {/* What You Will Get */}
            <View style={styles.section}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, }}>
                <Image source={icons.whatuget} />
                <Text style={styles.sectionHeading}>What you will get</Text>
              </View>
              <View style={styles.horizontalLine} />
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 0, paddingVertical: 10 }}
              >
                <View style={{ flexDirection: 'row', gap: 16 }}>
                  {features.map((item, index) => (
                    <View key={index} style={styles.featureCard}>
                      <View style={styles.iconBackground}>
                        <View style={{ position: 'relative' }}>
                          <Image source={item.image} style={styles.featureIcon} resizeMode="contain" />
                          {item.title === 'Phone - O - Senior' && (
                            <View style={styles.innerIconWrapper}>
                              <Image
                                source={images.insideofphonosenior} // Replace with your messaging icon
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
                          if (item.title === 'Phone - O - Senior')
                            navigation.navigate('PayoseniorScreen')
                        }
                        }
                      >
                        <Text style={styles.knowMoreText}>Know More</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>

            {/* Choose Plan */}
            <View style={styles.section}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, }}>
                <Image source={icons.chooseplan} />
                <Text style={styles.sectionHeading}>Choose Your Plan</Text>
              </View>
              <View style={styles.horizontalLine} />
              <Text
                style={{
                  width: 165,
                  height: 20,
                  fontFamily: 'Noto Sans', // Make sure the font is loaded if not default
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 20,
                  letterSpacing: 0,
                  textAlignVertical: 'center', // for Android
                  color: '#000000',
                }}
              >
                Offline Counselling Plan
              </Text>

              {plans.map((plan) => (
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
                  {/* Header Row */}
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Ionicons
                        name={selectedPlan === plan.name ? 'radio-button-on' : 'radio-button-off'}
                        size={20}
                        color={selectedPlan === plan.name ? '#1E7ED4' : '#C4C4C4'}
                        style={{ marginRight: 10 }}
                      />
                      <Text style={styles.planTitle}>{plan.name}</Text>
                    </View>
                    <Text style={styles.planPrice}>₹ {plan.price.toLocaleString()}</Text>
                  </View>

                  {/* "What will you get" Label */}
                  <Text style={styles.label}>What will you get</Text>

                  {/* Benefit Descriptions */}
                  {plan.benefits.map((benefit, index) => (
                    <View key={index} style={styles.benefitRow}>
                      <Image source={icons.checkicon} style={{ marginTop: 4, }} />
                      <Text style={styles.benefitText}>{benefit}</Text>
                    </View>
                  ))}

                  {/* See more benefits */}

                </TouchableOpacity>
              ))}

              <Text
                style={{
                  width: 165,
                  height: 20,
                  fontFamily: 'Noto Sans', // Make sure the font is loaded if not default
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 20,
                  letterSpacing: 0,
                  textAlignVertical: 'center', // for Android
                  color: '#000000',
                }}
              >
                Online Counselling Plan
              </Text>

              <FlatList
              ref={flatListRef}
                horizontal
                data={onlinePlans}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons
                          name={selectedPlan === item.name ? 'radio-button-on' : 'radio-button-off'}
                          size={20}
                          color={selectedPlan === item.name ? '#1E7ED4' : '#C4C4C4'}
                          style={{ marginRight: 10 }}
                        />
                        <View style={{ width: 79, height: 40 }}>
                          <Text style={styles.planTitle}>{item.name}</Text>
                        </View>
                      </View>
                      <Text style={styles.planPrice}>₹ {item.price.toLocaleString()}</Text>
                    </View>

                    {/* "What will you get" Label */}
                    <Text style={styles.label}>What will you get</Text>

                    {/* Benefit Descriptions */}
                    {item.benefits.map((benefit, index) => (
                      <View key={index} style={styles.benefitRow}>
                        <Image source={icons.checkicon} style={{ marginTop: 4 }} />
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
              />

              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
                {onlinePlans.map((_, index) => (
                  <View
                    key={index}
                    style={[styles.dotBase,
                    currentIndex === index
                      ? styles.activeDot
                      : styles.inactiveDot,]}
                  />
                ))}
              </View>

              <Text
                style={{
                  width: 165,
                  height: 20,
                  fontFamily: 'Noto Sans', // Make sure the font is loaded if not default
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 20,
                  letterSpacing: 0,
                  textAlignVertical: 'center', // for Android
                  color: '#000000',
                }}
              >
                Mini Session
              </Text>
              {miniSection.map((plan) => (
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
                  {/* Header Row */}
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Ionicons
                        name={selectedPlan === plan.name ? 'radio-button-on' : 'radio-button-off'}
                        size={20}
                        color={selectedPlan === plan.name ? '#1E7ED4' : '#C4C4C4'}
                        style={{ marginRight: 10 }}
                      />
                      <Text style={styles.planTitle}>{plan.name}</Text>
                    </View>
                    <Text style={styles.planPrice}>₹ {plan.price.toLocaleString()}</Text>
                  </View>

                  {/* "What will you get" Label */}
                  <Text style={styles.label}>What will you get</Text>

                  {/* Benefit Descriptions */}
                  {plan.benefits.map((benefit, index) => (
                    <View key={index} style={styles.benefitRow}>
                      <Image source={icons.checkicon} style={{ marginTop: 4, }} />
                      <Text style={styles.benefitText}>{benefit}</Text>
                    </View>
                  ))}

                  {/* See more benefits */}

                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        {/* Pay Section */}
        <View style={styles.paySection}>
          <View>
            <Text style={styles.payAmount}>₹{selectedPlanDetails?.price}</Text>
            <Text style={styles.taxText}>All Tax Included </Text>
          </View>
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => navigation.navigate('PaymentScreen', { selectedPlan: selectedPlanDetails })}
          >
            <Text style={styles.payButtonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
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
  dotBase: {
    marginHorizontal: 4,
  },
  bannerContainer: {
    width: contentWidth,
    height: (184 / 328) * contentWidth,
    borderRadius: 4,
    overflow: 'hidden',
    marginHorizontal: horizontalPadding,
    marginTop: 20,
    marginBottom: 24,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  overlayIcon: {
    position: 'absolute',
    width: 20,  // adjust as needed
    height: 20,
    bottom: 0,  // position relative to iconBackground
    right: 0,
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
  section: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
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
  text: {
    color: '#111111',
    fontFamily: 'Noto Sans',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 20,
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
  featureIcon: {
    width: 56,
    height: 56,
  },
  contentContainer: {
    width: 128,
    height: 72,
    marginLeft: 12,
    justifyContent: 'center',
  },
  headingIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
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
    letterSpacing: 0,
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
  planCard: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
    marginTop: 10,
    width: '100%',
    height: 440,
    marginBottom: 12,
  },
  planDescription: {
    fontSize: 13,
    color: '#8B8B8B',
    marginLeft: 30,
    marginTop: 6,
  },
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
  benefitText: {
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: '#000000',
    flex: 1,
  },
  moreBenefitsText: {
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: '#1E7ED4',
    paddingLeft: 4,
  },
  youtubeIcon: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    width: 67,
    height: 41,
    zIndex: 2,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0000005C', // 0.4 is 40% opacity
    zIndex: 1, // Just below YouTube icon which has zIndex: 2
  },

  thumbnailWrapper: {
    position: 'relative',
    width: '100%',
    height: 183,
    marginBottom: 16,
    borderRadius: 4,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 183,
    alignSelf: 'center',
    borderRadius: 4,
    marginBottom: 16,
  },
});

export default PersonalisedCounsellingScreen;
