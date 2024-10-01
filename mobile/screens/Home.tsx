import { View, Text } from 'react-native'
import React from 'react'
import Screen from './Screen'
import Report from '@/components/report/Report'
import ReportMore from '@/components/report/ReportMore'
import Greeting from '@/components/Greeting'

const Home = () => {
  return (
    <Screen safe="top">
      <Greeting />
      <Report />
      <ReportMore />
    </Screen>
  )
}

export default Home