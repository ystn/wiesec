import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WikiListItem from './list/item'
import Screen from '@/screens/Screen'
import { articles } from '@/assets/articles'

const Wiki = () => {
  return (
    // <Screen small>
      <ScrollView>
        {Object.values(articles).map((article: Article, index: number) => <WikiListItem reverse={index % 2 === 1} article={article} key={index} />)}
      </ScrollView>
    // </Screen>
  )
}

export default Wiki
