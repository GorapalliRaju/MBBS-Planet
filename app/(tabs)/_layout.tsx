import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '@/constants/icons';
import { Ionicons } from '@expo/vector-icons';
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          height: 56,
          alignSelf: 'center',
          bottom: 0,
          backgroundColor: '#1E7ED4',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 4,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#D8EAF8',
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: -8, // Adjust this to position the indicator above the icon
                    width: 68,
                    height: 2,
                    backgroundColor: 'white',
                    borderRadius: 2,
                  }}
                />
              )}
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? 'white' : '#D8EAF8'}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: -8, // Adjust this to position the indicator above the icon
                    width: 68,
                    height: 2,
                    backgroundColor: 'white',
                    borderRadius: 2,
                  }}
                />
              )}
              <Ionicons
                name={focused ? 'newspaper' : 'newspaper-outline'}
                size={24}
                color={focused ? 'white' : '#D8EAF8'}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="links"
        options={{
          title: 'Links',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: -8, // Adjust this to position the indicator above the icon
                    width: 68,
                    height: 2,
                    backgroundColor: 'white',
                    borderRadius: 2,
                  }}
                />
              )}
              <Ionicons
                name={focused ? 'globe' : 'globe'}
                size={24}
                color={focused ? 'white' : '#D8EAF8'}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerTitle: 'THE MBBS PLANET',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'black', // Customize the title color if needed
            fontSize: 20, // Adjust the font size if needed
            fontFamily: 'Zilla-Slab',
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View
                  style={{
                    position: 'absolute',
                    top: -8, // Adjust this to position the indicator above the icon
                    width: 68,
                    height: 2,
                    backgroundColor: 'white',
                    borderRadius: 2,
                  }}
                />
              )}
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={focused ? 'white' : '#D8EAF8'}
              />
            </View>
          ),
        }}
      />

    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
