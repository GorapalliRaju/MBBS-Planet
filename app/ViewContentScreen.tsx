import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { icons } from '@/constants/icons';
import { useNavigation } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { useDispatch, UseDispatch,useSelector } from 'react-redux';
import { RootState,AppDispatch } from '@/redux/store';
import { fetchPremiumData } from '@/redux/premiumDataslice';

const filterOptions = ['AIQ ', 'State ', 'Year-wise ', 'CAT Wise '];

const ViewContentScreen = () => {
  //const { files } = useLocalSearchParams();
  //const parsedFiles = typeof files === 'string' ? JSON.parse(files) : [];
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const navigation = useNavigation();
  const dispatch=useDispatch<AppDispatch>();
  useEffect(()=>{
    dispatch(fetchPremiumData({ filters: selectedFilters, sort: selectedSort }));
  },[dispatch,selectedFilters, selectedSort])
  const {isLoading,data,isError}=useSelector((state:RootState)=>state.premiumData);
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };
  
  
  const handleSortChange = (sortOption: string) => {
    setSelectedSort(sortOption);
    setIsSortModalVisible(false);
  };

  const renderItem = ({ item }: { item: any }) => {
    console.log("itemee==>>",item.isPremium);
    const handlePress = () => {
      if (item.fileType === 'folder') {
        navigation.push('ViewContentScreen', { files: JSON.stringify(item.children) });
      } else if (item.locked === true) {
        Alert.alert('Locked', 'This file is locked. Please unlock to view.');
      } else {
        navigation.push('ViewPdfScreen', { url: item.fileUrl, name: item.title });
      }
    };

    return (
      <View style={{ backgroundColor: '#F5F5F5', paddingHorizontal: 14 }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 68,
            paddingVertical: 11,
            paddingHorizontal: 12,
            borderRadius: 2,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 3,
            gap: 10,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          onPress={handlePress}
        >
          {item.fileType === 'folder' ? (
            <>
              <Image source={icons.foldericon} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text
                  style={{
                    fontFamily: 'Noto Sans',
                    fontWeight: '700',
                    fontSize: 14,
                    lineHeight: 20,
                    color: '#000',
                    textAlignVertical: 'center',
                  }}
                   numberOfLines={2}
                >
                  {item.description }
                </Text>
                {item.count && (
                  <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>
                    {item.count}
                  </Text>
                )}
              </View>
            </>
          ) : (
            <>
              <Image source={icons.pdficon} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text
                  style={{
                    fontFamily: 'Noto Sans',
                    fontWeight: '700',
                    fontSize: 14,
                    lineHeight: 20,
                    color: '#898989',
                    textAlignVertical: 'center',
                  }}
                >
                  {item.description}
                </Text>
                {item.count && (
                  <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 4 }}>
                    {item.count}
                  </Text>
                )}
              </View>
            </>
          )}

          {item.locked ? (
            <View
              style={{
                backgroundColor: '#F0F0F0',
                borderWidth: 0.5,
                borderColor: '#C4C4C440',
                borderRadius: 2,
                padding: 4,
              }}
            >
              <Image source={icons.lockicon} style={{ width: 18, height: 18 }} />
            </View>
          ) : (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderWidth: 0.5,
                borderColor: '#97979740',
                borderRadius: 2,
                padding: 4,
              }}
            >
              <Ionicons name="chevron-forward" size={20} color="gray" />
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      </View>
    
      {/* Bottom Bar */}
      <View className="absolute bottom-0 h-14 w-full border-t-[3px] border-gray-200 bg-white flex-row justify-around items-center">
        <TouchableOpacity
          className="flex-row items-center space-x-1 gap-3"
          onPress={() => setIsSortModalVisible(true)}
        >
          <Image source={icons.sorticon} />
          <Text className="text-black" style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: 16 }}>
            Sort
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center space-x-1 gap-3"
          onPress={() => setIsFilterModalVisible(true)}
        >
          <Image source={icons.filtericon} />
          <Text className="text-[#000000]" style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: 16 }}>
            Filter
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sort Modal */}
      <Modal transparent visible={isSortModalVisible} animationType="slide">
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setIsSortModalVisible(false)}
          className="flex-1 justify-end bg-black/40"
        >
          <View className="bg-white p-5 rounded-t-2xl">
            <Text style={{ fontFamily: 'Noto Sans', fontWeight: '300', fontSize: 16, color: '#000', marginBottom: 10 }}>
              SORT BY
            </Text>
            <View style={{ height: 1, backgroundColor: '#ECECEC', marginVertical: 2 }} />
            <View style={{ marginTop: 10 }}>
               {['Newly Added', 'Year-wise'].map((option) => {
                const isSelected = selectedSort === option;
                return (
                  <TouchableOpacity key={option} onPress={() => handleSortChange(option)} style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, color: isSelected ? '#000000' : '#A9A9A9', fontWeight: isSelected ? '500' : '400', fontFamily: 'Noto Sans' }}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Filter Modal */}
      <Modal transparent visible={isFilterModalVisible} animationType="slide">
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setIsFilterModalVisible(false)}
          className="flex-1 justify-end bg-black/40"
        >
          <View className="bg-white p-5 rounded-t-2xl">
            <Text className="text-lg mb-2" style={{ color: '#505050' }}>
              FILTER
            </Text>
            <View style={{ height: 1, backgroundColor: '#ECECEC' }} />
            <Text style={{ fontSize: 12, marginTop: 8, color: '#505050' }}>
              You can select multiple choices
            </Text>
            {filterOptions.map((option) => (
              <TouchableOpacity
                key={option}
                className="flex-row items-center py-2 space-x-3"
                onPress={() => toggleFilter(option)}
              >
                <Ionicons
                  name={
                    selectedFilters.includes(option)
                      ? 'checkbox-outline'
                      : 'square-outline'
                  }
                  size={20}
                  color="#000000"
                />
                <Text className="text-base">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ViewContentScreen;
