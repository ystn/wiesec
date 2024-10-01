import { View, Text } from 'react-native'
import React from 'react'
import Profile from '@/components/profile/Profile'
import Screen from './Screen'

const ProfileScreen = () => {
  return (
    <Screen safe='top'>
      <Profile big />
    </Screen>
  )
}

export default ProfileScreen