import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Welcome } from "../components/loadingcomponents/WelcomeSec";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";

export function LoadingScreen() {
    const navigation = useNavigation()

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Welcome'); 
        }, 5000); 
    
        return () => clearTimeout(timer);
      }, [navigation]);
  return (
    <>
        <View className="bg-white" style={styles.generalcont}>
           <Welcome /> 
        </View>
    </>
    
        

  );
}

const styles = StyleSheet.create({
    generalcont:{
        height: hp(100)
    }
})

