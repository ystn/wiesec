import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Screen from './Screen'
import Report from '@/components/report/Report'
import ReportMore from '@/components/report/ReportMore'
import Greeting from '@/components/Greeting'
import AvatarList from '@/components/avatar/AvatarList'
import { reports } from '@/assets/reports'

const childrenList: AvatarList = {
  avatars: [
    {
      id: '1',
      full_name: 'Tim Cook',
      image: 'https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg',
      onDelete: () => {}
    },
    {
      id: '2',
      full_name: 'Elon Musk',
      image: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg',
      onDelete: () => {}
    }
  ]
}

const Home = () => {
  return (
    <Screen safe="top">
      <ScrollView>
        <Greeting />
        <Report report={reports[0]} />
        <ReportMore />
        <AvatarList avatarList={childrenList} scroll={false} />
      </ScrollView>
    </Screen>
  )
}

export default Home
