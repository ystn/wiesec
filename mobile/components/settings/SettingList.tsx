import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import { SettingListProps } from '@/types/props';
import Setting from './Setting';

const SettingList = ({ settingList }: SettingListProps) => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 w-full')}>
      <Text style={tw('font-bold text-lg text-white')}>{settingList.title}</Text>
      <FlatList data={settingList.settings} renderItem={setting => <Setting {...setting} isLast={setting.index === settingList.settings.length - 1} />} />
    </View>
  )
}

export default SettingList