import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return;
  } else {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#F5F0EA", dark: "#F5F0EA" }}
        headerImage={
          <Image
            source={require("../../assets/images/BannerIndio.png")}
            resizeMode="cover"
            style={{ width: 400, height: 250 }}
          />
        }
      >
      <View style={{backgroundColor:'#F5F0EA'}}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText
            type="title"
            style={{
              fontFamily: "Poppins_600SemiBold",
              lineHeight: 40,
              textAlign: "center",
            }}
          >
            SEJA BEM VINDO !! 🔒🙅‍♂️
          </ThemedText>
        </ThemedView>
        <ThemedText style={styles.texto}>
          Para o trabalho escolar de DDMII,
          foi desenvolvida uma plataforma inspirada no conceito do
          LinkTree, focada em otimizar a presença digital através de uma
          interface simplificada e intuitiva.
        </ThemedText>

        <ThemedText style={styles.texto}>
          confira na pagina ao lado
        </ThemedText>
      </View>  
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  texto:{
    fontFamily: "Poppins_400Regular",
    lineHeight: 20,
    textAlign: "justify",
  },
});
