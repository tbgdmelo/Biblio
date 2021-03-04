import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  TouchableOpacity
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

export default function Perfil() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.capa}>
              <Image source={require('../images/capa.jpg')} style={styles.fotoCapa}/>
            </View>

              <Image source={require('../images/perfil.jpg')} style={styles.perfil}/>
              <View>
                <Text style={styles.userName}>Xaveco</Text>

                <Text style={styles.lidosRecente}>Lidos Recentemente</Text>

                <View style= {{ flexDirection:'row', justifyContent: 'space-between'}}>
                  <ScrollView
                      horizontal
                      scrollEventThrottle={1}
                      showsHorizontalScrollIndicator={false}
                      >
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l1.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l2.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l3.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l4.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l5.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                  </ScrollView> 
                </View>

                <Text style={styles.lidosRecente}>Continuar Leitura</Text>
                <View style= {{ flexDirection:'row', justifyContent: 'space-between'}}>
                  <ScrollView
                      horizontal
                      scrollEventThrottle={1}
                      showsHorizontalScrollIndicator={false}
                      >
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l1.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l2.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l3.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l4.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l5.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                  </ScrollView> 
                </View>

                <Text style={styles.lidosRecente}>Meus Envios</Text>
                <View style= {{ flexDirection:'row', justifyContent: 'space-between'}}>
                  <ScrollView
                      horizontal
                      scrollEventThrottle={1}
                      showsHorizontalScrollIndicator={false}
                      >
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l1.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l2.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l3.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l4.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image source={require('../images/livros/l5.jpg')} style={styles.livro}/>
                        </TouchableOpacity>
                  </ScrollView> 
                </View>
              </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  perfil:{
    borderRadius: 1000,
    alignContent: 'center',
    alignSelf:'center',
    width: '25%',
    height: 100,
  },
  userName:{
    textAlign:'center',
    marginTop: 10,
    fontSize: 20,
    color: '#fff'
  },
  capa:{
    width: '100%',
    height: '5%',
  },
  fotoCapa:{
    width: '100%',
    height: 200,
  },
  lidosRecente:{
    fontSize: 25,
    marginTop:25,
    paddingLeft: 10
  },
  livro:{
    width: 100,
    height: 150,
    marginLeft: 10
  },
});
