import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-2xl font-quicksand-semibold text-bold text-primary">Welcome to RN! </Text>
    </View>
  );
}
