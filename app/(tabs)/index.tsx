import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

const banner = require('../../assets/images/BannerIndio.png');

const openInstagram = async () => {
  const instagramProfileUrl = 'https://www.instagram.com/dael.lins/';
  const supported = await Linking.canOpenURL(instagramProfileUrl);

  if (supported) {
    await Linking.openURL(instagramProfileUrl);
  } else {
    Alert.alert('Não foi possível abrir o link', 'Por favor, verifique se você tem um navegador instalado.');
  }
};

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
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground source={banner} resizeMode="cover" style={styles.banner}></ImageBackground>
            <View style={styles.content}>
              <View style={styles.containerFlutuante}>
                <Image source={require('../../assets/images/papacapim.jpg')} style={styles.imagem}/>

                <Text style={styles.titulo}>Daniel Lins</Text>
                <Text style={styles.subtitulo}>Estudante</Text>
                <View style={styles.hairline} />
                <Text style={styles.texto}>Confira meu trabalho de Desenvolvimento de um app Web</Text>

                <View>
                  <TouchableOpacity onPress={openInstagram}>
                    <Text>Abrir Instagram</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0EA',
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
    top: -50,
    height: 400,
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
    height: 200,
  },
  titulo: {
    color: '#000',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },
  subtitulo: {
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
  },
  hairline: {
    margin: 20,
    backgroundColor: '#000',
    height: 2,
    width: 50,
  },
  texto:{
    color: '#000',
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
  }
});