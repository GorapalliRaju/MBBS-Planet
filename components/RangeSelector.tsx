import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { icons } from '@/constants/icons';

interface RangeSelectorProps {
    onSelectionChange: (selection: string) => void;
    onValueChange: (value: number) => void;
}

export const RangeSelector: React.FC<RangeSelectorProps> = ({ onSelectionChange, onValueChange }) => {
    const [selection, setSelection] = useState<string>('');
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

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

    const handleSelection = (newSelection: string) => {
        setSelection(newSelection);
        onSelectionChange(newSelection);
        setDropdownVisible(false);
        setInputValue(''); // Reset input on change
    };

    const handleInputChange = (text: string) => {
        // Allow only digits
        const cleaned = text.replace(/[^0-9]/g, '');
        setInputValue(cleaned);
        if (cleaned !== '') {
            onValueChange(Number(cleaned));
        }
    };

    return (
        <View>
            <Text style={styles.label}>Select your Range</Text>

            {/* Dropdown Selector */}
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setDropdownVisible(prev => !prev)}
            >
                <Text style={styles.dropdownText}>
                    {selection || 'Select Marks/Rank '}
                </Text>
                <Animated.Image
                    source={icons.CaretDown}
                    style={{ transform: [{ rotate }], width: 14, height: 14 }}
                />
            </TouchableOpacity>

            {/* Dropdown Options */}
            {dropdownVisible && (
                <View style={styles.dropdownOptions}>
                    {['Marks Range', 'Rank Range'].map((item) => (
                        <TouchableOpacity
                            key={item}
                            onPress={() => handleSelection(item)}
                            style={styles.dropdownOption}
                        >
                            <Text style={[
                                styles.optionText,
                                selection === item && styles.selectedOption
                            ]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}

            {/* Input Field */}
            {selection && (
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#505050', marginBottom: 10 }}>{selection}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            keyboardType="numeric"
                            value={inputValue}
                            onChangeText={handleInputChange}
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
    },
    dropdownText: {
        fontSize: 12,
        color: '#667085',
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
    selectedOption: {
        backgroundColor: '#E8F5FF',
        color: '#1565C0',
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
    input: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 4,
        height: 32,
    },
});
