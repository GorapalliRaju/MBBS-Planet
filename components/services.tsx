import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images } from '@/constants/images';

const services = [
  {
    icon: images.analytics,
    title: 'Premium Data',
    desc: 'Check the most useful analysis of previous year data',
    tag: null,
    tagColor: '',
    route: 'PremiumDataAnalysisScreen',
  },
  {
    icon: images.chat,
    title: 'Personalized Counseling',
    desc: 'Explore the best counseling support services',
    tag: 'Popular',
    tagColor: '#FDEAD6',
    textcolor:'#9C3717',
    route: 'Personalised-Counselling',
  },
  {
    icon: images.charts,
    title: 'College Prediction',
    desc: 'The only custom data analysis tool with most useful features',
    tag: 'Must Try',
    tagColor: '#EEFFEE',
    textcolor:'#055E01',
    route: 'CollegePredictionScreen',
  },
  {
    icon: images.list,
    title: 'Choice Filling List',
    desc: 'Check the personalized preference list',
    tag: null,
    tagColor: '',
    route: null,
  },
];

const ServicesSection = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const handleServicePress = (route: string | null) => {
    if (route) {
      navigation.navigate(route as never);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Services Offered</Text>

      <View style={styles.cardContainer}>
        {services.map((service, index) => (
          <Pressable
            key={index}
            onPress={() => handleServicePress(service.route)}
            style={styles.card}
          >
            <View style={styles.iconContainer}>
              <Image source={service.icon} style={styles.icon} />
            </View>

            <View style={styles.textContainer}>
              {service.tag && (
                <Text
                  style={[styles.tag, { backgroundColor: service.tagColor,color:service.textcolor }]}
                >
                  {service.tag}
                </Text>
              )}
              <Text style={styles.title}>{service.title}</Text>
              <Text style={styles.desc}>{service.desc}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 12,
  },
  cardContainer: {
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    gap: 12,

    // Clean, balanced soft shadow
    
  },
  iconContainer: {
    width: 90,
    height: 88,
    backgroundColor: '#EAF3FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  tag: {
    fontSize: 11,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
  desc: {
    fontSize: 13,
    color: '#666',
  },
});

export default ServicesSection;
