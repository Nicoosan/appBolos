import *as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home(props){
  return(
    <View style={styles.container}>
    <Text style={styles.titulo}> Os melhores sabores de bolo que existem </Text>
    <Image style={styles.img} source={require('../assets/bolo.png')}/>
    <TouchableOpacity  onPress={()=>{props.navigation.navigate('BoloChocolate')}}>
      <Text style={styles.bolochoc}>Bolo de Chocolate</Text>
    </TouchableOpacity>

     <TouchableOpacity  onPress={()=>{props.navigation.navigate('BoloFuba')}}>
      <Text style={styles.bolofuba}>Bolo de Fubá</Text>
    </TouchableOpacity>

     <TouchableOpacity  onPress={()=>{props.navigation.navigate('BoloMilho')}}>
      <Text style={styles.bolomilho}>Bolo de Milho</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DBE4C6',
    padding: 8,
    alignItems: 'center'
  },
  titulo: {
    margin: 25,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#557153',
  },
bolochoc :{
   margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#609966',
    color: '#9DC08B',
    padding: 10,
    borderRadius: 15
},
bolofuba: {
   margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#609966',
    color: '#9DC08B',
    padding: 10,
    borderRadius: 15
},
bolomilho: {
   margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#609966',
   color: '#9DC08B',
   padding: 10,
    borderRadius: 15
},
img:{
    borderRadius: 38,
    width: 288,
    height: 300,
   
  },
}

)
