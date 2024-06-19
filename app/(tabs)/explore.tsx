import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground, Image, TouchableOpacity, Linking, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const banner = require('../../assets/images/BannerIndio.png');

const openGitHub = async () => {
  const githubUrl = "https://github.com/Indio01"; // Substitua com o URL do seu repositório
  const supported = await Linking.canOpenURL(githubUrl);
  if (supported) {
    await Linking.openURL(githubUrl);
  } else {
    console.error(`Não é possível abrir o URL: ${githubUrl}`);
  }
};

const openLinkedin = async () => {
  const profileId = "daniel-lins-264332310";
  try {
    const linkedInUrl = `linkedin://profile/${profileId}`;
    const isInstalled = await Linking.canOpenURL(linkedInUrl);

    if (isInstalled) {
      await Linking.openURL(linkedInUrl);
    } else {
      const webUrl = `https://www.linkedin.com/in/${profileId}`;
      await Linking.openURL(webUrl);
    }
  } catch (error) {
    console.error("Erro ao abrir o perfil do LinkedIn:", error);
  }
};

const openWhatsapp = async () => {
  const phoneNumber = "5518998113880";
  const message = "";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const supported = await Linking.canOpenURL(whatsappUrl);
  if (supported) {
    await Linking.openURL(whatsappUrl);
  } else {
    console.error(`Não é possível abrir o URL do WhatsApp: ${whatsappUrl}`);
  }
};

const openInstagram = async () => {
  const instagramUrl = "instagram://user?username=dael.lins";
  try {
    await Linking.openURL(instagramUrl);
  } catch (error) {
    console.error("Erro ao abrir o link do Instagram:", error);
  }
};

const openTelefone = async () => {
  const numero = "18998113880"; // Substitua pelo número desejado
  const url = `tel:${numero}`;
  try {
    await Linking.openURL(url);
  } catch (error) {
    console.error("Erro ao abrir o cliente de telefone:", error);
  }
};

const openGmail = async () => {
  const email = "linsindio07@gmail.com";
  const conteudo = "Tentativa de Contato via E-mail";

  const url = `mailto:${email}?subject=${conteudo}`;

  try {
    await Linking.openURL(url);
  } catch (error) {
    console.error("Erro ao abrir o cliente de e-mail:", error);
  }
};

export default function TabTwoScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic, 
    Poppins_600SemiBold,
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
                <Image source={require('../../assets/images/papacapim.jpg')} style={styles.imagem}/>

                <Text style={styles.titulo}>Daniel Lins</Text>
                <Text style={styles.subtitulo}>Estudante</Text>
                <View style={styles.linhaFlutuante} />
                <Text style={styles.texto}>Confira meu trabalho de{} Desenvolvimento de um app Web</Text>

                <View style={{marginTop:15}}>
                  <View style={styles.botao}>
                    <TouchableOpacity onPress={openLinkedin}>
                    <View style={styles.logoTitle}>
                        <View style={{width: 25}}>
                          <Ionicons name="logo-linkedin" size={20} color="white" />
                        </View>
                        <View style={styles.ViewText}>
                          <Text style={styles.textoBotao}>LINKEDIN</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  
                  <View style={styles.botao}>
                    <TouchableOpacity onPress={openGitHub}>
                    <View style={styles.logoTitle}>
                        <View style={{width: 25}}>
                          <Ionicons name="logo-github" size={20} color="white" />
                        </View>
                        <View style={styles.ViewText}>
                          <Text style={styles.textoBotao}>GITHUB</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.botao}>
                    <TouchableOpacity onPress={openWhatsapp}>
                    <View style={styles.logoTitle}>
                        <View style={{width: 25}}>
                          <Ionicons name="logo-whatsapp" size={20} color="white" />
                        </View>
                        <View style={styles.ViewText}>
                          <Text style={styles.textoBotao}>WHATSAPP</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.botao}>
                    <TouchableOpacity onPress={openInstagram}>
                      <View style={styles.logoTitle}>
                        <View style={{width: 25}}>
                          <Ionicons name="logo-instagram" size={20} color="white" />
                        </View>
                        <View style={styles.ViewText}>
                          <Text style={styles.textoBotao}>INSTAGRAM</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.botao}>
                    <TouchableOpacity onPress={openTelefone}>
                    <View style={styles.logoTitle}>
                        <View style={{width: 25}}>
                          <Ionicons name="call" size={20} color="white" />
                        </View>
                        <View style={styles.ViewText}>
                          <Text style={styles.textoBotao}>TELEFONE</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </View>
        </View>
      </SafeAreaView>
    );
  }
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7888C4',
  },
  content: {
    padding: 5,
    height: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFlutuante: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 110,
    height: 480,
    width: '85%'
  },
  imagem:{
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: -50
  },
  banner: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 190,
  },
  titulo: {
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 30,
    textAlign: 'center',
  },
  subtitulo: {
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    marginTop: 0,
    textAlign: 'center',
  },
  linhaFlutuante: {
    margin: 10,
    backgroundColor: '#000',
    height: 2,
    width: 50,
  },
  texto:{
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    textAlign: 'center',
  },
  botao:{
    marginTop: 5,
    backgroundColor: '#292929',
    width: 250,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  textoBotao:{
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
  },
  logoTitle:{
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  ViewText:{
    width: 100, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});