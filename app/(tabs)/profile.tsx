import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import { useNavigation } from 'expo-router';
import { icons } from '@/constants/icons';
import { candidateOptions,socialLinks } from '@/utils/helper';
import { useDispatch, UseDispatch,useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { useEffect } from 'react';
import { fetchUserDetails } from '@/redux/userDetailsslice';

const CandidateProfileScreen = () => {
  const dispatch=useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(fetchUserDetails());
  },[dispatch]);
  const {isLoading,user,isError}=useSelector((state:RootState)=>state.userDetails)
  const { width } = useWindowDimensions();
  const containerWidth = width * 0.9;
  const avatarSize = width * 0.18;
  const iconSize = width * 0.045;
  const arrowSize = width * 0.04;
  const navigation=useNavigation();

  const scaleFont = (size: number) => {
    return Math.min(Math.max(size * (width / 375), 12), 20);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={[styles.card, { width: containerWidth, padding: width * 0.04 }]}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>navigation.navigate('CandidateProfileScreen')}>
            <Image
              source={icons.userDetails}
              style={{
                width: avatarSize,
                height: avatarSize,
                borderRadius: avatarSize / 2,
                marginRight: 16,
                backgroundColor:'#F4F4F4',
              }}
            />
            </TouchableOpacity>
            <View style={{ gap: 6 }}>
              <Text style={{ fontSize: scaleFont(14), fontWeight: '600', color: '#333' }}>
                {user?.name}
              </Text>
              <Text style={{ fontSize: scaleFont(12), color: '#666' }}>
                C23 N534 D15 JUN (19309)
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#1E7ED4',
                    fontSize: scaleFont(12),
                    textDecorationLine: 'underline',
                  }}
                >
                  Become a Premium Member?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Complete Your Form */}
        <View
          style={[
            styles.promptBox,
            {
              width: containerWidth,
              height: width * 0.13,
              paddingHorizontal: width * 0.04,
            },
          ]}
        >
          <Text style={{ color: '#999', fontWeight: '600', fontSize: scaleFont(14) }}>
            Complete your form*
          </Text>
          <Image
            source={icons.rightarrow}
            style={{ width: arrowSize, height: arrowSize, tintColor: '#999' }}
          />
        </View>

        {/* Settings Section */}
        <View style={[styles.section, { width: containerWidth, paddingTop: width * 0.03 }]}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: scaleFont(14),
              color: '#333',
              marginLeft: 16,
              marginBottom: 12,
            }}
          >
            Settings
          </Text>
          <View style={styles.grid}>
            {candidateOptions.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.optionBox,
                  {
                    height: width * 0.14,
                    padding: width * 0.04,
                  },
                ]}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: iconSize,
                    height: iconSize,
                    tintColor: '#1E7ED4',
                    marginRight: 6,
                  }}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: scaleFont(12),
                    color: '#414141',
                    flexShrink: 1,
                  }}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Social Links Section */}
        <View style={[styles.section, { width: containerWidth, paddingTop: width * 0.03 }]}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: scaleFont(14),
              color: '#333',
              marginLeft: 16,
              marginBottom: 12,
            }}
          >
            Socials
          </Text>
          <View style={styles.socialGrid}>
            {socialLinks.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.socialBox,
                  {
                    width: (containerWidth - 64) / 4,
                    height: (containerWidth - 64) / 4,
                    marginBottom: width * 0.03,
                  },
                ]}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: iconSize + 2,
                    height: iconSize + 2,
                    marginBottom: 4,
                    tintColor: '#1E7ED4',
                  }}
                />
                <Text
                  style={{
                    fontSize: scaleFont(10),
                    textAlign: 'center',
                    color: '#333',
                  }}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CandidateProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  promptBox: {
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  optionBox: {
    width: '49%',
    borderRadius: 4,
    backgroundColor: '#F6FAFD',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  socialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom:15,
  },
  socialBox: {
    backgroundColor: '#FAFAFA',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
