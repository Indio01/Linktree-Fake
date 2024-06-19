import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View, Text } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.titulo}>BEM VINDO</Text>
            <Text style={styles.texto}>
              Bem-vindo ao nosso projeto de DDM 2! Este aplicativo mobile,
              inspirado no Linktree, tem como proposta centralizar e organizar
              todos os seus links de diferentes plataformas em um único lugar.
              Com uma interface intuitiva e opções de personalização, você
              poderá gerenciar e compartilhar seus conteúdos de forma prática e
              eficiente.
            </Text>
            <Text style={{fontFamily: "Poppins_400Regular", textAlign: 'center', fontSize: 17.5, margin: 20,}}>{'Confira na aba Linktree -->'}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F0EA",
    height: "100%",
  },
  content: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontFamily: "Poppins_700Bold",
    textAlign: 'center',
    fontSize: 40,
    marginTop: 150,
  },
  texto:{
    fontFamily: "Poppins_400Regular",
    textAlign: 'justify',
    fontSize: 17.5,
    margin: 20,
  },
});
