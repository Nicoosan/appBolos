import *as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Bolofuba(){
  return(
    <View  style={styles.container}>
    <Text style={styles.bolofuba} >Bolo de fubá </Text>
    <Image style={styles.img} source={require('../assets/boloFuba.jpg')}/>
    <Text style={styles.massa} >Massa </Text>
    <Text> 
    3 ovos
2 xícaras (chá) de açúcar {'\n'}
2 xícaras (chá) de fubá {'\n'}
3 colheres (sopa) rasas de farinha de trigo {'\n'}
1/2 copo (americano) de óleo {'\n'}
1 copo de leite {'\n'}
1 colher (sopa) de fermento em pó {'\n'}
    </Text> 
    <Text style={styles.modo} >Modo de preparo </Text>
    <Text>
 1 - Bata todos os ingredientes no liquidificador.  {'\n'}

2 - Coloque em uma forma untada e enfarinhada. {'\n'}

3 - Leve ao forno preaquecido e deixe assar, por cerca de 40 minutos. {'\n'}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5D5AE',
    padding: 8,
    alignItems: 'center'
  },
   bolofuba: {
     margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EF9A53',
    padding: 10,
    borderRadius: 15
  },
  img:{
    borderRadius: 38,
    width: 288,
    height: 300,
    
  },
  massa: {
   margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3C2A21',
    padding: 5,
    borderRadius: 15
  },
  modo: {
   margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3C2A21',
    padding: 5,
    borderRadius: 15
}
}
)