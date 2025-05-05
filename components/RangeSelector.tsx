import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { icons } from '@/constants/icons';

export const RangeSelector = () => {
    const [selection, setSelection] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const rotateAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(rotateAnim, {
            toValue: dropdownVisible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
        }).start();
    }, [dropdownVisible]);
    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });
    return (
        <View>
            <Text style={styles.label}>Select your Range</Text>

            {/* Dropdown Selector */}
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setDropdownVisible(prev => !prev)}
            >
                <Text style={styles.dropdownText}>
                    {selection || 'Select Marks/Rank'}
                </Text>
                <Animated.Image
                    source={icons.CaretDown}
                    style={{ transform: [{ rotate }], width: 14, height: 14 }}
                />

            </TouchableOpacity>

            {/* Dropdown Options */}
            {dropdownVisible && (
                <View style={styles.dropdownOptions}>
                    <TouchableOpacity
                        onPress={() => {
                            setSelection('Marks Range');
                            setDropdownVisible(false);
                        }}
                        style={styles.dropdownOption}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selection === 'Marks Range' && styles.selectedOption,
                            ]}
                        >
                            Marks Range
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setSelection('Rank Range');
                            setDropdownVisible(false);
                        }}
                        style={styles.dropdownOption}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selection === 'Rank Range' && styles.selectedOption,
                            ]}
                        >
                            Rank Range
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Single Input UI for Range */}
            {selection && (
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#505050', marginBottom: 10 }}>{selection}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            keyboardType="numeric"
                            value={inputValue}
                            onChangeText={setInputValue}
                            placeholder={selection === 'Marks Range' ? 'e.g. 300' : 'e.g. 1000'}
                            style={styles.input}
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
    },

    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 0,
    },

    dropdownText: {
        fontSize: 12,
        color: '#667085',
    },

    dropdownArrow: {
        fontSize: 16,
        color: '#333',
    },

    dropdownOptions: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        overflow: 'hidden',
    },

    dropdownOption: {
        paddingVertical: 4,
        paddingHorizontal: 15,
    },

    optionText: {
        fontSize: 12,
        height: 28,
        paddingTop: 5,
        paddingLeft: 4,
        width: 160,
        color: '#000000',
    },

    selectedText: {
        color: '#1565C0',
        fontWeight: '600',
    },

    selectedOption: {
        backgroundColor: '#E8F5FF',
        color: '#1565C0',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 8,
    },

    inputContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#fff',
    },

    smallLabel: {
        fontSize: 12,
        color: '#555',
        marginBottom: 4,
    },

    input: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 4,
        height: 32,
    },

    dashContainer: {
        justifyContent: 'center',
        paddingHorizontal: 8,
    },

    dash: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

