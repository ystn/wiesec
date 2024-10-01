import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn';
import * as Haptics from 'expo-haptics';

interface SettingProps {
    item: Setting;
    index: number;
    isLast: boolean;
}

const Setting = ({item, index, isLast}: SettingProps) => {
    const tw = useTailwind();

    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        item.onPress?.();
      }
  return (
    <>
        <TouchableOpacity onPress={handlePress} style={tw('flex-row p-4 items-center')}>
            <View style={tw('mr-4')}>
                {item.icon}
            </View>
            <Text style={tw('text-white')}>{item.name}</Text>
        </TouchableOpacity>
        {!isLast && <View style={tw('border-2 rounded-full border-gray-700')} />}
    </>
  )
}

export default Setting