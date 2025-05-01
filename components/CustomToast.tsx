import React from 'react';
import { Image, Dimensions } from 'react-native';
import Toast, { BaseToast } from 'react-native-toast-message';
import { images } from '@/constants/images';

const screenHeight = Dimensions.get('window').height;

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        alignSelf: 'center',
        borderLeftColor: 'green',
        bottom: 80,
        width: '80%',
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={{
        fontSize: 18,
        fontWeight: 'bold',
      }}
      text2Style={{
        fontSize: 15,
        color: 'gray',
      }}
      renderLeadingIcon={() => (
        <Image
          source={images.analytics}
          style={{ width: 30, height: 40 }}
        />
      )}
    />
  ),
};

const CustomToast = () => <Toast config={toastConfig} />;

export default CustomToast;
