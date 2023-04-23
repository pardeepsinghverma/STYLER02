import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './component/FlatCards'
import ElevatedCards from './component/ElevatedCards'
import FancyCards from './component/FancyCards'
import ActionCards from './component/ActionCards'
import ContactList from './component/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCards />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App