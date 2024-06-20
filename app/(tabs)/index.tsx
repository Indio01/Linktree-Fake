import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, ImageBackground, View, Text, StatusBar, SafeAreaView } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const banner = require('../../assets/images/BannerIndio.png');

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
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <View style={{backgroundColor: '#F5F0EA',}}>
      <ImageBackground source={banner} resizeMode="cover" style={styles.banner} />
        <View style={styles.content}>
        <View style={styles.containerFlutuante}>
                
                <Text style={styles.titulo}>BEM-VINDO</Text>
                
                <View style={styles.linhaFlutuante}></View>

                <Text style={styles.texto}>
                  Bem-vindo ao nosso projeto de DDM 2! Este aplicativo mobile,
                  inspirado no Linktree, tem como proposta centralizar e organizar
                  todos os seus links de diferentes plataformas em um único lugar.
                  Com uma interface intuitiva e opções de personalização, você
                  poderá gerenciar e compartilhar seus conteúdos de forma prática e
                  eficiente.
                </Text>
                <Text style={{fontFamily: "Poppins_400Regular", textAlign: 'center', fontSize: 15, margin: 20,}}>{'Confira na aba Linktree -->'}</Text>
                </View>
              </View>
            </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7888C4',
    height: "100%",
  },
  content: {
    padding: 5,
    height: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontFamily: "Poppins_700Bold",
    textAlign: 'center',
    fontSize: 40,
    // marginTop: 10
  },
  texto:{
    fontFamily: "Poppins_400Regular",
    textAlign: 'justify',
    fontSize: 15,
    marginTop: 10,
    margin: 20,
  },
  banner: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 190,
  },
  containerFlutuante: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 110,
    height: 450,
    width: '85%'
  },
  linhaFlutuante: {
    margin: 10,
    backgroundColor: '#000',
    height: 2,
    width: 50,
  },
});
