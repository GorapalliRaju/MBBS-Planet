import { StyleSheet, Text, View } from 'react-native'
import {useState,useEffect} from 'react'
import { Redirect } from 'expo-router'
import splashscreen from './splashscreen'
import { useCustomFonts } from '@/hooks/useFonts'

const index = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await useCustomFonts();
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);
  
  return (
    <Redirect href="/splashscreen" />
  )
}

export default index

const styles = StyleSheet.create({})