import React from 'react';
import { View, Text, ScrollView, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { icons } from '@/constants/icons';
import { candidateData } from '@/utils/helper';

const CandidateDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* User Details Header */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image source={icons.candidateprofile}/>
          <Text style={styles.sectionTitle}>User Details</Text>
        </View>

        {/* Username */}
        <View style={styles.block}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.value}>{candidateData.username}</Text>
        </View>

        {/* Enrollment Number */}
        <View style={styles.block}>
          <Text style={styles.label}>Enrollment Number</Text>
          <Text style={styles.value}>{candidateData.enrollmentNumber}</Text>
        </View>

        {/* Category & State */}
        <View style={styles.inlineRow}>
          <View style={styles.inlineBoxSmall}>
            <Text style={styles.label}>Category</Text>
            <Text style={styles.value}>{candidateData.category}</Text>
          </View>
          <View style={styles.inlineBoxSmall}>
            <Text style={styles.label}>State</Text>
            <Text style={styles.value}>{candidateData.state}</Text>
          </View>
        </View>

        {/* AIR & State Rank */}
        <View style={styles.inlineRow}>
          <View style={styles.inlineBoxSmall}>
            <Text style={styles.label}>AIR</Text>
            <Text style={styles.value}>{candidateData.AIR}</Text>
          </View>
          <View style={styles.inlineBoxSmall}>
            <Text style={styles.label}>State Rank</Text>
            <Text style={styles.value}>{candidateData.stateRank}</Text>
          </View>
        </View>
      </View>
       
       <View style={styles.horizontalLine} />

      {/* College Preferences Header */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image source={icons.collegedeliveredicon} style={{width:24,height:24}}/>
          <Text style={styles.sectionTitle}>College Preference Delivered</Text>
        </View>

        {/* College Cards */}
        {candidateData.collegePreferences.map((pref, index) => (
          <View key={index} style={styles.collegeCard}>
            <View style={{position: 'relative', paddingLeft: 19}}>
            {/* Left Border */}
  <View style={{
    position: 'absolute',
    left: -6,
    top: 10,          // vertical offset
    height: 53,       // height of the red vertical line
    width: 1,
    backgroundColor: '#D2D2D2',
  }} />

  {/* Top Border */}
  <View style={{
    position: 'absolute',
    left: -6,
    top: 10,          // same as left border start
    width: 19,        // how long the top border is
    height: 1,
    backgroundColor: '#D2D2D2',
  }} />

  {/* Bottom Border */}
  <View style={{
    position: 'absolute',
    left: -6,
    top: 63,          // top + height of left border
    width: 40,        // same length as top border
    height: 1,
    backgroundColor: '#D2D2D2',
  }} />
            <View style={styles.collegeBlock}>
              <Text style={styles.label}>{pref.type}</Text>
              <Text style={styles.value}>{pref.name}</Text>
            </View>
            <View style={styles.joiningBlock}>
              <Text style={styles.label}>Joining Status</Text>
              <Text style={styles.value}>{pref.joiningStatus}</Text>
            </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    flex: 1,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginTop: 0,
    marginBottom:24,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  block: {
    width: 180,
    height: 44,
    marginLeft: 32,
    marginBottom: 12,
    gap: 4,
  },
  label: {
    fontSize: 14,
    color: '#A2ABB2',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginTop: 2,
  },
  inlineRow: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginBottom: 12,
    gap:10,
  },
  inlineBoxSmall: {
    width: 100,
    height: 44,
    gap: 4,
  },
  collegeCard: {
    width: 271,
    height: 120,
    borderRadius: 8,
    marginVertical: 2,
    marginLeft: 15,
  },
  collegeBlock: {
    width: 249,
    height: 44,
    gap: 4,
  },
  joiningBlock: {
    width: 143,
    height: 44,
    gap: 4,
    marginTop: 8,
    marginLeft: 20,
  },
});

export default CandidateDetailsScreen;
