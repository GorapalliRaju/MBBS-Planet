import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
export default function CollegeListScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            {/* S.No and Code */}
            <View style={{ padding: 16, borderColor: '#fff', backgroundColor: '#fff', borderRadius: 8, }}>
                <View style={styles.rowBetween}>
                    <Text style={styles.label}>S.No</Text>
                    <Text style={styles.value}>EW001</Text>
                </View>

                {/* Sheet Link */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.label}>Sheet Link: </Text>
                    <TouchableOpacity >
                        <View style={{flexDirection:'row',gap:4,}}>
                        <Image  source={icons.preferencelist} style={{width:16,height:16,marginTop:8,}}/>
                        <Text style={styles.link}>College Preference List</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Info Text */}
                <View style={{ padding: 18, borderWidth: 0.5, borderColor: '#1E7ED40D', backgroundColor: '#F3F9FF', borderRadius: 8, }}>
                    <View style={{flexDirection:'row',gap:4,}}>
                    <Image source={icons.privacy}style={{width:12,height:12,marginTop:6,}}/>
                    <Text style={styles.noteText}>This sheet is best visible in Google Sheet App</Text>
                    </View>
                    {/* Download Button */}
                    <Text style={styles.subLabel}>Download Here</Text>
                    <TouchableOpacity
                        style={styles.downloadButton}
                        onPress={() => Linking.openURL('https://docs.google.com')} // Replace with download link
                    >
                        <Text style={styles.downloadButtonText}>Download Google Sheet</Text>
                    </TouchableOpacity>
                </View>
                {/* Site Viewing Info */}
                <View style={{ width: 320, height: 50, }}>
                    <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 10, fontStyle: 'italic', }}>For better viewing experience view on our website portal -{' '}
                        <Text style={styles.link} onPress={() => Linking.openURL('https://yourwebsite.com')}>Click Here</Text>
                    </Text>
                </View>
                <View style={styles.horizontalLine} />
                {/* How to Use Section */}
                <View style={{ width: 320, height: 140, }}>
                    <Text style={styles.sectionTitle}>How to use choice filling portal</Text>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>
                <View style={styles.thumbnailWrapper}>
                    <Image source={images.banner} style={styles.thumbnail} />
                    <View style={styles.overlay} />

                    <Image source={images.youtube} style={styles.youtubeIcon} />
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#F5F5F5',
        flex: 1,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
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
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0000005C', // 0.4 is 40% opacity
        zIndex: 1, // Just below YouTube icon which has zIndex: 2
    },
    youtubeIcon: {
        position: 'absolute',
        top: '40%',
        left: '45%',
        width: 67,
        height: 41,
        zIndex: 2,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#ECECEC',
        marginBottom: 4,
        marginTop: 16,
    },
    subLabel: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 12,
        marginBottom: 6,
        color: '#000',
    },
    value: {
        fontSize: 14,
        fontWeight: '400',
        color: '#292727',
    },
    link: {
        fontSize: 14,
        color: '#1E88E5',
        fontWeight: '500',
        marginVertical: 6,
        textDecorationLine:'underline',
    },
    noteText: {
        fontSize: 12,
        color: '#000000',
        marginTop: 4,
    },
    downloadButton: {
        backgroundColor: '#1E88E5',
        height: 54,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 4,
    },
    downloadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        justifyContent: 'center',
        marginTop: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        marginTop: 20,
        marginBottom: 8,
    },
    description: {
        fontSize: 13,
        fontFamily: 'Noto Sans',
        color: '#111111',
        marginBottom: 12,
        lineHeight: 20,
    },
    videoThumbnail: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        resizeMode: 'cover',
    },
});
