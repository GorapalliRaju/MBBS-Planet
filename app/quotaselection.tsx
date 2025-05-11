import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RangeSelector } from '@/components/RangeSelector';
const formFields = [
  'Quota',
  'Category',
  'Marks/Rank',
  'State',
  'Established Year',
  'Airport City',
  'Round',
  'Year',
];

const quotaOptions = ['AIQ', 'DU', 'IPU', 'STATE', 'CENTRE'];
const categoryOptions = ['General', 'OBC', 'SC', 'ST'];
const stateOptions = ['Delhi', 'Maharashtra', 'Tamil Nadu'];
const roundOptions = ['1', '2', '3', 'Stray Vacancy'];
const airportCityOptions = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Hyderabad'];

const QuotaSelectionScreen = () => {
  const [selectedQuota, setSelectedQuota] = useState<string[]>([]);
  const [activeField, setActiveField] = useState<string>('Quota');
  const [marks, setMarks] = useState({ from: '', to: '' });
  const [airportCityRange, setAirportCityRange] = useState({ from: '', to: '' });
  const [selectedSelection, setSelectedSelection] = useState<string>('');
  const [selectedRange, setSelectedRange] = useState<number | undefined>();


  const [formData, setFormData] = useState<any>({
    Category: '',
    'Marks/Rank': '',
    State: '',
    'Established Year': '',
    'Airport City': '',
    Round: '',
    Year: '',
  });

  const handleSelectionChange = (selection: string) => {
    console.log('Selected Section:', selection);
    setSelectedSelection(selection);
  };

  const handleValueChange = (value: number) => {
    console.log('Input Value:', value);
    setSelectedRange(value);
  };

  const toggleQuota = (item: string) => {
    setSelectedQuota(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleChange = async () => {
  try {
    const response = await fetch('http://192.168.55.104:7000/api/college/previous', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include token if required for auth
        Authorization: `Bearer YOUR_AUTH_TOKEN`, 
      },
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Previous result:', result.data);
      // Optionally navigate or update UI here
    } else {
      console.warn('Fetch failed:', result.message);
      // Optionally show alert or toast
    }
  } catch (error) {
    console.error('Error fetching previous result:', error);
    // Optionally show error alert
  }
};


  const handleCheckResult = async () => {
    const inputType = selectedSelection === 'Marks Range' ? 'marks' : 'rank';
    const value = selectedRange;

    const payload = {
      inputType,
      value,
      course: formData?.Course || 'MBBS',        // Optional
      category: formData?.Category || '',
      state: formData?.State || '',
    };

    console.log('Sending Payload:', payload);

    try {
      const response = await fetch('http://192.168.55.104:7000/api/college/predictColleges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWRkYjNlOTg2YmE0ZjM2NTQ0YWNkZCIsImlhdCI6MTc0Njc4NzEzNCwiZXhwIjoxNzQ5MjA2MzM0fQ.xVHQ-Lj1WXgeLEAgtRaLxnecJLhQA_D5gFi88kCpCD4`, // Replace with actual token
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log('Received Colleges:', data.data.colleges);
        // You can save the data in state or navigate
      } else {
        console.warn('API Error:', data.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Fetch Error:', error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
    }
  };

  const clearAll = () => {
    setSelectedQuota([]);
    setFormData({
      Category: '',
      'Marks/Rank': '',
      State: '',
      'Established Year': '',
      'Airport City': '',
      Round: '',
      Year: '',
    });
    setMarks({ from: '', to: '' });
    setAirportCityRange({ from: '', to: '' });
  };

  const renderField = () => {
    switch (activeField) {
      case 'Quota':
        return (
          <View>
            <Text style={styles.label}>Select your Quota</Text>
            <Text style={{ color: '#505050', marginBottom: 15, }}>You can select multiple choices</Text>
            {quotaOptions.map(option => (
              <TouchableOpacity
                key={option}
                onPress={() => toggleQuota(option)}
                style={styles.optionRow}
              >
                <Ionicons
                  name={
                    selectedQuota.includes(option)
                      ? 'checkbox-outline'
                      : 'square-outline'
                  }
                  size={20}
                  color="#000000"
                />
                <Text style={styles.optionText}>    {option} </Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 'Category':
        return categoryOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.selectOption,
              formData.Category === option && styles.selectedOption,
            ]}
            onPress={() => setFormData({ ...formData, Category: option })}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ));

      case 'State':
        return stateOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.selectOption,
              formData.State === option && styles.selectedOption,
            ]}
            onPress={() => setFormData({ ...formData, State: option })}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ));

      case 'Round':
        return roundOptions.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.selectOption,
              formData.Round === option && styles.selectedOption,
            ]}
            onPress={() => setFormData({ ...formData, Round: option })}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ));

      case 'Airport City':
        return (
          <View>
            <Text style={styles.label}>Enter Range</Text>
            <View style={styles.row}>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={styles.smallLabel}>From</Text>
                <TextInput
                  keyboardType="numeric"
                  value={marks.from}
                  onChangeText={val => setMarks(prev => ({ ...prev, from: val }))}
                  placeholder="e.g. 300"
                  style={styles.input}
                />
              </View>

              {/* Dash divider */}
              <View style={styles.dashContainer}>
                <Text style={styles.dash}>-</Text>
              </View>

              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={styles.smallLabel}>To</Text>
                <TextInput
                  keyboardType="numeric"
                  value={marks.to}
                  onChangeText={val => setMarks(prev => ({ ...prev, to: val }))}
                  placeholder="e.g. 700"
                  style={styles.input}
                />
              </View>
            </View>

          </View>
        );

      case 'Marks':
        return (
          <View>
            <Text style={styles.label}>Marks Range</Text>
            <Text style={{ color: '#505050', marginBottom: 15, }}>Select the range of your marks.</Text>
            <View style={styles.row}>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={styles.smallLabel}>From</Text>
                <TextInput
                  keyboardType="numeric"
                  value={marks.from}
                  onChangeText={val => setMarks(prev => ({ ...prev, from: val }))}
                  placeholder="e.g. 300"
                  style={styles.input}
                />
              </View>

              {/* Dash divider */}
              <View style={styles.dashContainer}>
                <Text style={styles.dash}>-</Text>
              </View>

              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={styles.smallLabel}>To</Text>
                <TextInput
                  keyboardType="numeric"
                  value={marks.to}
                  onChangeText={val => setMarks(prev => ({ ...prev, to: val }))}
                  placeholder="e.g. 700"
                  style={styles.input}
                />
              </View>
            </View>

          </View>
        );

      case 'Marks/Rank':
        return (
          <RangeSelector
            onSelectionChange={handleSelectionChange}
            onValueChange={handleValueChange}
          />
        );

      default:
        return (
          <View>
            <Text style={styles.label}>Enter {activeField}</Text>
            <TextInput
              placeholder={`Enter ${activeField}`}
              value={formData[activeField]}
              onChangeText={text =>
                setFormData({ ...formData, [activeField]: text })
              }
              style={styles.input}
            />
          </View>
        );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#Fff' }}>
      <ScrollView contentContainerStyle={{ padding: 5 }}>
        <View style={styles.card}>
          <Text style={{ color: '#555', marginBottom: 10 }}>
            Find your ideal college based on your rank and preferences. <Text style={{ color: '#1E7ED4' }}>Help?</Text>
          </Text>
          <TouchableOpacity style={styles.viewBtn} onPress={handleChange}>
            <Text style={styles.viewBtnText}>View Your Previous Result</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Please Fill the Details</Text>
        </View>
        <View style={styles.selectionContainer}>
          <View style={styles.sidebar}>
            {formFields.map(field => (
              <TouchableOpacity key={field} onPress={() => setActiveField(field)}>
                <Text
                  style={[
                    styles.sidebarItem,
                    activeField === field && styles.sidebarItemActive,
                  ]}
                >
                  {field}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.contentBox}>{renderField()}</View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={clearAll}>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resultBtn} onPress={handleCheckResult}>
          <Text style={styles.resultBtnText}>Check Result</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    marginBottom: 20,
  },
  viewBtn: {
    borderColor: '#1E7ED4',
    borderWidth: 1,
    paddingVertical: 12,
    height: 48,
    alignItems: 'center',
    borderRadius: 8,
  },
  viewBtnText: {
    color: '#1E7ED4',
    fontWeight: '600',
  },
  selectionContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    minHeight: 300,
  },
  dashContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
  dash: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sidebar: {
    width: '42%',
    borderRightColor: '#F5F5F5',
    borderRightWidth: 1,
    padding: 10,
  },
  sidebarItem: {
    padding: 10,
    color: '#333',
    marginBottom: 3,
    height: 50,
    width: 147,
    backgroundColor: '#F5F9FA',
  },
  sidebarItemActive: {
    backgroundColor: '#fff',
    color: '#1E7ED4',
    fontWeight: 'bold',
    borderLeftWidth: 5,
    borderLeftColor: '#1E7ED4',
  },
  contentBox: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#222',
  },
  smallLabel: {
    fontSize: 12,
    marginBottom: 4,
    color: '#555',
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#E4E4E4',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  selectOption: {
    borderWidth: 1,
    borderColor: '#E4E4E4',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  selectedOption: {
    borderColor: '#2563EB',
    backgroundColor: '#DBEAFE',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    width: 10,
    height: 10,
    backgroundColor: '#2563EB',
    borderRadius: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  clearText: {
    color: '#1E7ED4',
    fontWeight: '600',
    marginTop: 10,
  },
  resultBtn: {
    backgroundColor: '#1E7ED4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    width: 185,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default QuotaSelectionScreen;
