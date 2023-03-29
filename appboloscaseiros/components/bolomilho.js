import *as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Bolomilho(){
  return(
    <View style={styles.container}>
    <Text style={styles.bolomilho}>Bolo de milho </Text>
    <Image style={styles.img} source={require('../assets/boloMilho.jpg')}/>
     <Text style={styles.massa} >Massa </Text>
    <Text> 
1 lata de milho (sem o líquido)  {'\n'}
1 lata de leite (medida da lata de milho)  {'\n'}
1 lata de açúcar (medida da lata de milho)  {'\n'}
1 lata de flocão de milho  {'\n'}
1/2 lata de óleo de soja  {'\n'}
3 ovos inteiros  {'\n'}
1 colher (sopa) de fermento em pó  {'\n'}
margarina
farinha de trigo
    </Text> 
    <Text style={styles.modo} >Modo de preparo </Text>
    <Text>
Escorra o milho e use a própria lata para as medidas.  {'\n'}

Unte e enfarinhe uma forma de bolo com furo.  {'\n'}

Preaqueça o forno.  {'\n'}

Coloque no liquidificador o milho (já escorrido), o leite, açúcar, flocão de milho, óleo, ovos e bata bem até que o milho fique bem moído.  {'\n'}

Se quiser, pode acrescentar duas colheres de sopa de coco ralado.  {'\n'}

Acrescente o fermento em pó e pulse o liquidificador 3 vezes.  {'\n'}

Despeje essa massa na forma e leve ao forno médio.  {'\n'}

Deixe assar por, aproximadamente, 40 minutos.  {'\n'}

Faça o teste do palito e observe um tom dourado médio, para saber que o bolo está pronto.  {'\n'}

Espere esfriar totalmente para desenformar.  {'\n'}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create ({
   container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0ECCF',
    padding: 8,
    alignItems: 'center'
  },
   bolomilho: {
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
    height: 200
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
})