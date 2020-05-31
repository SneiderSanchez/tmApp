import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bienvenido a tm App</Text>
      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            'Clicked!!',
            'Nos fuimos para el otro componente lol',
            [{text: 'OK     :)', onPress: () => {}}],
            {cancelable: false},
          )
        }>
        <LottieView
          source={require('../public/static/animations/alert.json')}
          autoPlay
          loop
          speed={0.9}
          style={styles.alertAnimation}
        />
      </TouchableOpacity>
      <Text style={styles.emoji}>{'🤔'}</Text>
      <Text style={styles.subtitle}>
        {'presiona el icono \n para activar una alerta'}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 10,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  alertAnimation: {
    marginVertical: 30,
    width: 400,
    height: 400,
  },
  emoji: {
    fontSize: 26,
  },
});
