import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Perfil from '../src/Perfil'
import Home from '../src/Home'
import MyBookList from '../src/MyBookList'
import Historic from '../src/Historic'

const Tab = createBottomTabNavigator();

const MainTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Perfil" component={Perfil} />
			<Tab.Screen name="MyBookList" component={MyBookList} />
			<Tab.Screen name="Historic" component={Historic} />
		</Tab.Navigator>
	)
}

export {MainTab}