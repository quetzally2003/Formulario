import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';

const Registrar = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemText}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      
      
    </View>
  );

  return (
    
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="Apellido Paterno" />
        <TextInput style={styles.input} placeholder="Apellido Materno" />
        <TextInput style={styles.input} placeholder="Nombre del Alumno" />
        <TextInput style={styles.input} placeholder="Fecha de Nacimiento" />
        <TextInput style={styles.input} placeholder="Curp" />
        <TextInput style={styles.input} placeholder="Domicilio" />
        <TouchableOpacity style={styles.button}onPress={()=>navigation.navigate("")}>
          <Text style={styles.buttonText}>Enviar Formulario </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  itemText: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#87ceeb',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Registrar;