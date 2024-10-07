import { View, Text } from 'react-native'
import React from 'react'
import AvatarList from '@/components/avatar/AvatarList'
import { Feather } from '@expo/vector-icons'

const childrenList: AvatarList = {
    // title: 'Children',
    avatars: [
        {
            full_name: 'Tim Cook',
            onDelete: () => {}
        },
        {
            full_name: 'Thomas Edison',
            onDelete: () => {}
        },
        {
          full_name: 'Scan a child',
          icon: <Feather name="plus" color="white" size={24} />,
          navigate: '/(app)/qrcode-scanner'
        }
    ]
}

const Children = () => {
  return (
    <AvatarList avatarList={childrenList} />
  )
}

export default Children
