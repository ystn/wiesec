import { View, Text } from 'react-native'
import React from 'react'
import AvatarList from '@/components/avatar/AvatarList'
import { Feather } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { selectChildren } from '@/store/slices/children'

const addChild = {
  id: '3',
  full_name: 'Scan a child',
  icon: <Feather name="plus" color="white" size={24} />,
  navigate: '/(app)/qrcode-scanner'
}

const Children = () => {
  const children = useSelector(selectChildren);
  return (
    <AvatarList avatarList={{...children, avatars: [...children?.avatars, addChild] }} />
  )
}

export default Children
