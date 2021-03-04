import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function Discover () {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.caixaBusca}>
          <TextInput placeholder="Buscar" placeholderTextColor="#000" autoCapitalize='none'
            style={{flex:1, padding:0}}
            editable={true}
          />
            <TouchableOpacity
            >
            <Icon name="magnify" color={'#0000b3'} size={30}/>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
 );
}

const styles = StyleSheet.create({
  caixaBusca:{
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset:{width:0, height:3},
    shadowOpacity: 0.5,
    shadowRadius:5,
    elevation:10
  },
});