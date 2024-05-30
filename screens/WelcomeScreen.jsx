import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { CustomButton } from "../components/generalcomponents/Button";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFontContext } from "../contexts/FontContext";
import LoginImage from "../svg/login.svg"

export function Welcome() {

  const fontsLoaded = useFontContext();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <ScrollView>
         <View className="bg-white">
        <View className="flex-1 justify-center items-center">
          <Image source={LoginImage} resizeMethod="cover" style={styles.loginimage} />
        </View>
        <View style={styles.logocont}>
          <Text className="uppercase font-extrabold text-custom-color flex justify-center items-center" style={styles.logo}>kampetrackr</Text>
          <Text style={styles.fitnessbuddy} className="font-800 text-center ">Your Fitness Buddy.</Text>
          <View className="flex-1 justify-center items-center">
            <Text className="text-center font-400 text-des-color" style={styles.fitnessdes}>A new and better way to stay fit. Set, track and share fitness goals</Text>
          </View>
          <View style={styles.btncont}>
            <CustomButton message={"I’m new here!"} />
            <Text style={styles.haveaccnt} className="font-600 text-des-color text-center">I ALREADY HAVE AN ACCOUNT</Text>
          </View>
        </View>


      </View>
    </ScrollView>
   

    </>
  );
}

const styles = StyleSheet.create({
  loginimage: {
    marginTop: hp(4),
    height: hp(50),
    width: wp(100),
    height: hp(50)
  },
  logo: {
    fontSize: wp(6),
    wordSpacing: 20,
  },
  logocont: {
    paddingVertical: hp(4)
  },
  fitnessbuddy: {
    fontSize: wp(6.5),
    fontFamily: 'HelveticaNeueLight',
    paddingVertical: hp(3),
  },
  fitnessdes: {
    fontSize: wp(4.2),
    width: wp(80),
    fontFamily: 'HelveticaNeueLight',
  },
  btncont:{
    paddingTop: hp(8),
    paddingBottom: hp(2)
  },
  haveaccnt:{
    fontFamily: 'HelveticaNeueLight',
    fontSize: wp(3.3),
    paddingVertical: hp(2)
  }
});