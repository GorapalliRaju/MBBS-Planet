import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DropdownProps {
  label: string;
  value: string;
  onSelect: (value: string) => void;
  placeholder: string;
  items: string[];
}

const CustomDropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onSelect,
  placeholder,
  items,
}) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item: string) => {
    onSelect(item);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={{ color: value ? '#000' : '#A0AEC0' }}>
          {value || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#A0AEC0" />
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          <View style={styles.menu}>
            <FlatList
              data={items}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.menuItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    color: '#1A202C',
    marginBottom: 6,
  },
  dropdown: {
    height: 48,
    borderColor: '#CBD5E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  menu: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  menuItemText: {
    fontSize: 14,
    color: '#2D3748',
  },
});

export default CustomDropdown;
