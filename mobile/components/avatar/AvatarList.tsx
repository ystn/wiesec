import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import { AvatarListProps, SettingListProps } from '@/types/props';
import Avatar from './Avatar';

const AvatarList = ({ avatarList, scroll = true }: AvatarListProps) => {
    const tw = useTailwind();
  return (
    <View style={tw('flex-1 w-full')}>
      {avatarList.title && <Text style={tw('font-bold text-lg text-white')}>{avatarList.title}</Text>}
      {scroll && <FlatList data={avatarList.avatars} renderItem={avatar => <Avatar {...avatar} isLast={avatar.index === avatarList.avatars.length - 1} />} />}
      {!scroll && <>
        {avatarList.avatars.map((avatar, index) => {
          return <Avatar item={avatar} index={index} isLast={index === avatarList.avatars.length - 1} key={avatar.id} />
        })}
      </>}
    </View>
  )
}

export default AvatarList
