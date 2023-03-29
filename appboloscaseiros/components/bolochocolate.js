import *as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Bolochocolate(){
  return(
    <View style={styles.container}>
    <Text style={styles.bolochoc} >Bolo de Chocolate </Text>
    <Image style={styles.img} source={require('../assets/bolochoc.jpg')}/>
    <Text style={styles.massa} >Massa </Text>
    <Text> 
    3 ovos
    1 e 1/2 xícara (chá) de açúcar {'\n'}
    2 xícaras (chá) de farinha de trigo {'\n'}
    1 xícara (chá) de chocolate em pó ou achocolatado {'\n'}
    1/2 xícara (chá) de óleo {'\n'}
    1 colher (sopa) de fermento em pó {'\n'}
    1 pitada de sal {'\n'}
    1 xícara (chá) de água quente {'\n'}
    </Text>
    <Text style={styles.cobertura} >Cobertura </Text>
    <Text>
    4 colheres (sopa) de leite {'\n'}
    1/2 xícara (chá) de chocolate em pó {'\n'}
    1 colher (sopa) de manteiga {'\n'}
    1 xícara (chá) de açúcar {'\n'}

    </Text>
    <Text style={styles.modo} >Modo de preparo </Text>
    <Text style={styles.modomassa} >Massa </Text>
    <Text>
    1 - Em um liquidificador, bata os ovos, o açúcar, o óleo, o achocolatado e a farinha de trigo.
     {'\n'}

2 -Despeje a massa em uma tigela e adicione a água quente e o fermento, misturando bem. {'\n'}

3 - Despeje a massa em uma forma untada e asse em forno médio-alto (200° C), preaquecido, por 40 minutos. {'\n'}

4 - Desenforme ainda quente. {'\n'}
    </Text>
    <Text style={styles.modocalda} >Cobertura </Text>
    <Text>
   1 - Em uma panela, leve todos os ingredientes ao fogo até levantar fervura. {'\n'}

2 - Despeje ainda quente em cima do bolo.
    </Text>
    </View>
  );
}

const styles = StyleSheet.create ({ 
   container: {
   flex: 1,
    justifyContent: 'center',
    backgroundColor: '#AD8E70',
    padding: 8,
    alignItems: 'center'
  },
  bolochoc: {
     margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
    color: '#3C2A21',
    padding: 10,
    borderRadius: 15
  },
  img:{
    borderRadius: 38,
    width: 288,
    height: 300
  },
  massa: {
   margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3C2A21',
    padding: 5,
    borderRadius: 15
  },
  cobertura: {
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
  },
  modomassa: {
     margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3C2A21',
    padding: 5,
    borderRadius: 15
  },
  modocalda: {
     margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3C2A21',
    padding: 5,
    borderRadius: 15
  },
  }
)