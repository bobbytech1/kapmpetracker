import { View, Text, StyleSheet, StatusBar, SafeAreaView} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export function LoadingScreen() {
  return (
    <>
        <SafeAreaView>
            <View className="text-red-700">
                <Text className="text-red-800 text-center" style={styles.content}>Testing</Text>
                <Text>kampetrackr</Text>
            </View>
    
        </SafeAreaView>
        
    </>
    
        

  );
}

const styles = StyleSheet.create({
    content:{
        fontSize: wp(20)
    }
})
