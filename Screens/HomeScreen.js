import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Registrar")} > 
        <Text style={styles.buttonText}>Formulario</Text>
        <img src= 'https://slp.gob.mx/secult/PublishingImages/Paginas/Normatividad/formulario.png'
          style={styles.imagen}>
        </img>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#87ceeb',
    padding: 16,
    margin: 10,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;