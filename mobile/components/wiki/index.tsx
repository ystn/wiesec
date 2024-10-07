import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WikiListItem from './list/item'
import Screen from '@/screens/Screen'

const Wiki = () => {
  return (
    // <Screen small>
        <ScrollView>
            <WikiListItem />
            <WikiListItem reverse/>
            <WikiListItem />
            <WikiListItem reverse/>
            <WikiListItem />
            <WikiListItem reverse/>
            <WikiListItem />
            <WikiListItem reverse/>
            <WikiListItem />
        </ScrollView>
    // </Screen>
  )
}

export default Wiki
