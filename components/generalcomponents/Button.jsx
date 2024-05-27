import { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export function CustomButton({message}) {

    const [fontsLoaded, fontError] = useFonts({
        'HelveticaNeueBlack': require('../../assets/fonts/HelveticaNeueBlack.otf'),
      });

      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
  return (
    <>
        <View className="flex justify-center items-center" onLayout={onLayoutRootView}>
            <TouchableOpacity className="bg-btn-color flex justify-center items-center rounded-11px text-white uppercase font-500 tracking-6px" style={styles.custombutton}>{message}</TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    custombutton:{
        height: hp(7),
        width: wp(80),
        fontSize: wp(4.3), 
        fontFamily: 'HelveticaNeueBlack'
    }
})