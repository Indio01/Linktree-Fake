import {StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground } from 'react-native';

const banner = require('../../assets/images/BannerIndio.png');

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground source={banner} resizeMode="cover" style={styles.image}></ImageBackground>
        </View>
        <View style={styles.containerFlutuante}>
          <Text style={styles.text}>Estou funcionando!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  containerFlutuante: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    position: 'absolute',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
