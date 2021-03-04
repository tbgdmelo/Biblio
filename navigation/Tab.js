import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import Perfil from '../src/Perfil'
import Home from '../src/Home'
import MyBookList from '../src/MyBookList'
import Discover from '../src/Discover'
import Historic from '../src/Historic'

const Tab = createBottomTabNavigator();

const MainTab = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#8080ff',
				inactiveTintColor: '#777',
			}}
		>
			<Tab.Screen name="Inicio" component={Home} 
				options={{
					tabBarLabel: 'Inicío',
					tabBarIcon: () => (
						<Icon name="home" color={'#0000b3'} size={30}/>
					),
				}}
			/>
			<Tab.Screen name="Perfil" component={Perfil}
				options={{
					tabBarLabel: 'Perfil',
					tabBarIcon: () => (
						<Icon name="account" color={'#0000b3'} size={30}/>
					),
				}}
			/>
			<Tab.Screen name="Buscar" component={Discover}
				options={{
					tabBarLabel: 'Buscar',
					tabBarIcon: () => (
						<Icon name="book-search" color={'#0000b3'} size={30}/>
					),
				}}
			/>
			<Tab.Screen name="MinhaLista" component={MyBookList} 
				options={{
					tabBarLabel: 'Minha Lista',
					tabBarIcon: () => (
						<Icon name="bookshelf" color={'#0000b3'} size={30}/>
					),
				}}
			/>
			<Tab.Screen name="Historico" component={Historic} 
				options={{
					tabBarLabel: 'Histórico',
					tabBarIcon: () => (
						<Icon name="history" color={'#0000b3'} size={30}/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export {MainTab}