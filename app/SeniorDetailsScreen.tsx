// SeniorDetailsScreen.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { icons } from '@/constants/icons';

const SeniorDetailsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.successContainer}>
        <View style={{gap:10,alignItems:'center'}}>
        <Image source={icons.successicon}/>
        <Text style={styles.successText}>Thank you for payment</Text>
        </View>
        <Text style={styles.subText}>You can now connect with the concerned person</Text>
      </View>
      <View style={{width:350,height:428}}>
      <View style={styles.card}>
        <Text style={styles.title}>Details of Senior</Text>

        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} // Replace with actual image URL
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <View style={styles.badge}>
            <Text style={styles.badgetext}>3rd Year Student</Text>
            </View>
            <Text style={styles.name}>Naman Kapoor</Text>
            <Text style={styles.college}>MBBS International College</Text>
          </View>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About Me</Text>
          <View style={{width:280,height:79}}>
          <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua mpor incididunt ut labore et dolore
          </Text>
          </View>
        </View>
      
        <Text style={styles.connectTitle}>Connect on</Text>

        <TouchableOpacity style={styles.chatButton}>
          <Image source={icons.seniordetailschaticon} style={{width:24,height:24}}/>
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.meetButton}>
            <Image source={icons.seniordetailsmeeticon}/>
          <Text style={styles.meetButtonText}>Google meet</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

export default SeniorDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FAFAFA',
    flexGrow: 1,
    alignItems:'center',
  },
  successContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width:179,
    height:134,
    top:30,
  },
  successText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subText: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    top:40,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color:'#1A1C29',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileTextContainer: {
    marginLeft: 12,
    width:170,
    height:67,
    gap:2,
  },
  badge: {
    backgroundColor: '#F2F8FF',
    color: '#1E7ED4',
    width:104,
    height:24,
    borderRadius: 4,
    fontSize: 12,
    borderWidth:0.5,
    borderColor:'#1E7ED4',
    alignSelf:'flex-start',
    marginBottom: 4,
  },
  badgetext: {
    color: '#1E7ED4',
    fontSize: 12,
    marginTop:3,
    textAlign: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
  },
  college: {
    fontSize: 12,
    color: '#787878',
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  aboutText: {
    fontSize: 12,
    fontFamily:'Noto Sans',
    color: '#111111',
    lineHeight:20,
    fontWeight:'300',
  },
  connectTitle: {
    fontSize: 14,
    fontWeight: '700',
    color:'#000000',
    fontFamily:'Noto sans',
    marginBottom: 12,
  },
  chatButton: {
    backgroundColor: '#1E7ED4',
    height:54,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    gap:8,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  meetButton: {
    borderWidth: 1,
    borderColor: '#1E7ED4',
    height:54,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:8,
  },
  meetButtonText: {
    color: '#1E7ED4',
    fontSize: 16,
    fontWeight: '600',
  },
});
