import { View, Text, StyleSheet, StatusBar, SafeAreaView} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export function Welcome() {
  return (
    <>
        <SafeAreaView>
            <View className="flex justify-center content-center items-center" style={styles.content}>
                <Text className="uppercase font-extrabold text-custom-color" style={styles.logo}>kampetrackr</Text>
            </View>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    content:{
        height: hp(100),
    },
    logo:{
        fontSize: wp(6)
    }
})
