import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { icons } from '@/constants/icons';
import { candidateData } from '@/utils/helper';

const CandidateDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* User Details Header */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image source={icons.candidateprofile} />
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
      <View style={{marginBottom:20,}}>
      <View style={styles.horizontalLine} />
      </View>
      {/* College Preferences Header */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image source={icons.collegedeliveredicon} style={{ width: 24, height: 24 }} />
          <Text style={styles.sectionTitle}>Counselling Milestones</Text>
        </View>

        {/* College Cards */}
        {candidateData.collegePreferences.map((pref, index) => (
          <View key={index} style={styles.collegeCard}>
            <View style={styles.collegeCardContent}>
              {/* Vertical Line Decoration */}
              <View style={styles.leftDecoration}>
                <View style={styles.leftLine} />
                <View style={styles.topLine} />
                <View style={styles.bottomLine} />
              </View>

              <View style={styles.collegeBlock}>
                <Text style={styles.label}>{pref.type}</Text>
                <Text style={styles.value}>{pref.name}</Text>
              </View>

              <View style={styles.joiningBlock}>
                <Text style={styles.label}>Joining Status</Text>
                <Text style={styles.value}>{pref.joiningStatus}</Text>
              </View>
            </View>
             <View style={{gap:10}}>
            {/* View Result PDF */}
            <TouchableOpacity onPress={() => { /* Add link or navigation */ }}>
              <Text style={styles.link}>View Result PDF</Text>
            </TouchableOpacity>

            {/* College Wise Allotment Link */}
            <TouchableOpacity onPress={() => { /* Add link or navigation */ }}>
              <Text style={{fontSize:14,fontWeight:'600'}}>
                See College wise allotment - <Text style={styles.linkHighlight}>Click here</Text>
              </Text>
            </TouchableOpacity>
            </View>
            {/* Conditional horizontal line (skip last item) */}
            <View style={{marginTop:20}}>
            {index !== candidateData.collegePreferences.length - 1 && (
              <View style={styles.horizontalLine} />
            )}
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
    marginBottom: 4,
  },
  section: {
    marginBottom: 20,
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
    color: '#000',
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
    paddingHorizontal: 32,
    marginBottom: 12,
    gap: 10,
  },
  inlineBoxSmall: {
    width: 100,
    height: 44,
    gap: 4,
  },
  collegeCard: {
    width: '100%',
    borderRadius: 8,
    padding: 10,
    
  },
  collegeCardContent: {
    position: 'relative',
    paddingLeft: 19,
  },
  leftDecoration: {
    position: 'absolute',
    left: -6,
    top: 10,
  },
  leftLine: {
    height: 53,
    width: 1,
    backgroundColor: '#D2D2D2',
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 19,
    height: 1,
    backgroundColor: '#D2D2D2',
  },
  bottomLine: {
    position: 'absolute',
    top: 53,
    left: 0,
    width: 40,
    height: 1,
    backgroundColor: '#D2D2D2',
  },
  collegeBlock: {
    marginBottom: 8,
    gap: 4,
  },
  joiningBlock: {
    marginBottom: 8,
    gap: 4,
    marginLeft: 20,
  },
  link: {
    color: '#1E7ED4',
    fontSize: 14,
    marginTop: 8,
    fontWeight:'600',
    textDecorationLine:'underline',
  },
  linkHighlight: {
    textDecorationLine: 'underline',
    fontWeight: '600',
    color:'#1E7ED4',
  },
});

export default CandidateDetailsScreen;
