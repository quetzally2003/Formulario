import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert } from "react-native";
import app from "../config-firebase";

import {getFirestore, collection, addDoc, getDocs,doc,deleteDoc, getDoc, setDoc} from 'firebase/firestore'
const db= getFirestore(app)
export default function RegistroScreen(props){
  
    const initialState ={
      nombre: '',
      apellido:'',
      ciudad:'',
      telefono: '',
      correo: '',
}

  const [state, setState] = useState (initialState)

   const handleChangeText =(value, name)=>{
    setState({...state, [name]:value})
   }

   const saveUsers =async()=>{
    try{
      await addDoc(collection(db,'users'),{
        ...state
      })
      Alert.alert('alerta','guardado con exito')
      props.navigation.navigate('Menu')
    }
    catch{
      console.error(error)
    }
    //console.log(state)
   }
   
   return(
    <ScrollView style={StyleSheet.container}>
     <Text style={styles.titulo}>Crear Registro</Text>

     <View style={styles.botones}>
      <TextInput style={styles.texto} placeholder='nombre' onChangeText={(value)=>handleChangeText(value, 'nombre')}
      value={state.nombre} />
     </View>
     <View style={styles.botones}>
      <TextInput style={styles.texto} placeholder='apellido' onChangeText={(value)=>handleChangeText(value, 'apellido')}
      value={state.apellido} />
     </View>

     <View style={styles.botones}>
      <TextInput style={styles.texto} placeholder='ciudad' onChangeText={(value)=>handleChangeText(value, 'ciudad')}
      value={state.ciudad} />
     </View>

     <View style={styles.botones}>
     <TextInput style={styles.texto}placeholder='telefono' onChangeText={(value)=>handleChangeText(value, 'telefono')}
      value={state.telefono} />
     </View>

     <View style={styles.botones}>
     <TextInput style={styles.texto} placeholder='correo' onChangeText={(value)=>handleChangeText(value, 'correo')}
      value={state.correo} />
     </View>

     <View>
      <Button title= 'GUARDAR USUARIO' onPress={saveUsers} />
     </View>
    </ScrollView>
   );
}

const styles =StyleSheet.create({
  titulo: {
    textAlign:'center',
    fontSize:18,
    marginTop:12, 
    marginBottom:20
    },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botones: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  texto:{
    
  }

});

