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
      onDelete: () => {}
    },
    {
      id: '2',
      full_name: 'Thomas Edison',
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
