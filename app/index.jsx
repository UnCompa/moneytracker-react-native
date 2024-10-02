import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import MyText from "../components/MyText";
export default function Page() {
  return (
    <>
      <View style={styles.container} className="h-screen bg-zinc-950 bg-gradient-to-r from-red-500 to-cyan-500">
        <View>
          <Text className="font-bold text-2xl text-white">
            Bienvenido a MoneyTracker
          </Text>
          <MyText>
            Que tal
          </MyText>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
