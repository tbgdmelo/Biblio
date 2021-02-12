import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../src/Home'
import Perfil from '../src/Perfil'
import MyBookList from '../src/MyBookList'
import Historic from '../src/Historic'
import Stats from '../src/Stats'
import Reading from '../src/Reading'
import Discover from '../src/Discover'
import Configuration from '../src/Configuration'


const Drawer = createDrawerNavigator()

const MainDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Início" component={Home} />
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Em leitura" component={Reading} />
        <Drawer.Screen name="Minha Lista" component={MyBookList} />
        <Drawer.Screen name="Descobrir" component={Discover} />
        <Drawer.Screen name="Histórico" component={Historic} />
        <Drawer.Screen name="Estatísticas" component={Stats} />
        <Drawer.Screen name="Configurações" component={Configuration} />
        
    </Drawer.Navigator>
  )
}

export {MainDrawer}