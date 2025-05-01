import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, Dimensions, Image, TouchableOpacity, Animated } from 'react-native';
import { icons } from '@/constants/icons';

type Props = {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  items: { label: string; value: string }[];
  pickerId: string;
  isOpen: boolean;
  onToggle: (pickerId: string) => void;
};

export default function PickerField({ label, value, onValueChange, placeholder, items, pickerId, isOpen, onToggle }: Props) {
  const [rotation] = useState(new Animated.Value(isOpen ? 180 : 0));

  const selectedItem = items.find(item => item.value === value);
  const displayText = selectedItem ? selectedItem.label : placeholder;

  useEffect(() => {
    Animated.timing(rotation, {
      toValue: isOpen ? 180 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen, rotation]);

  const handleSelect = (item: { label: string; value: string }) => {
    onValueChange(item.value);
    onToggle(pickerId);
  };

  const toggleDropdown = () => {
    onToggle(pickerId);
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.pickerWrapper}>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={toggleDropdown}
          activeOpacity={0.7}
        >
          <Text style={[styles.input, !selectedItem && styles.placeholder]}>
            {displayText}
          </Text>
          {Platform.OS !== 'web' && (
            <Animated.Image
              source={icons.downimage}
              style={[
                styles.arrowImage,
                { transform: [{ rotate: rotateInterpolate }] },
              ]}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.dropdown}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={item.value}
                style={[
                  styles.dropdownItem,
                  index === items.length - 1 && styles.lastDropdownItem,
                  item.value === value && styles.selectedItem,
                ]}
                onPress={() => handleSelect(item)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.dropdownItemText,
                    item.value === value && styles.selectedItemText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  field: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Noto Sans',
    color: '#4D4D4D',
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: 6,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 54,
    justifyContent: 'center',
    overflow: 'visible',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    height: '100%',
  },
  input: {
    fontSize: 15,
    color: '#1A202C',
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    flex: 1,
  },
  placeholder: {
    color: '#C2C2C2',
    left: 6,
  },
  arrowImage: {
    width: 60,
    height: 55,
    left: 14,
    top: 1,
    bottom: 15,
    right: 20,
    tintColor: '#4A5568',
    marginTop: Platform.OS === 'android' ? 2 : 4,
  },
  dropdown: {
    position: 'absolute',
    top: 52,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CBD5E0',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 1000,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
  },
  lastDropdownItem: {
    borderBottomWidth: 0,
  },
  dropdownItemText: {
    fontSize: 15,
    color: '#1A202C',
    fontFamily: 'Noto Sans',
  },
  selectedItem: {
    backgroundColor: '#F7FAFC',
  },
  selectedItemText: {
    fontWeight: '600',
    color: '#2D3748',
  },
});