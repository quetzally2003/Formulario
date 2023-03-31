import React from 'react';
import { Text, View, TextInput, StyleSheet, ImageBackground,TouchableOpacity} from 'react-native';

const Loggin = ({navigation}) => {
  return (
    <View style={StyleSheet.container}>
      <Text style={style.heading}></Text>
      <ImageBackground
        source={{uri:'https://png.pngtree.com/thumb_back/fw800/background/20201101/pngtree-wallpaper-blue-plexus-background-image_450893.jpg'}}
        style={style.header}>
      </ImageBackground>
      <View style={style.card}>
        <TextInput style={style.input} placeholder="Usuario"/>
        <TextInput style={style.input} placeholder="Contrasena" secureTextEntry={true}/>
        
        <TouchableOpacity style={style.button} onPress={()=>navigation.navigate("Home")}>
          <Text style={style.buttonText}>Inicio</Text>
        </TouchableOpacity>
        <div className="d-flex justify-content-end">
          <p className="d-inline-block m-0 pe-2 pt-2 fst-italic fw-semibold pointerforgot-text">¿Olvido contraseña?</p>
        </div>
      </View>
    
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent:'center',
    paddingTop: 50,
    paddingBottom:20,
    width: '100%',
    height: 150,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor:'#000',
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    marginTop: 40,
    width: '90%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight:'bold',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#87ceeb',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
});

export default Loggin;