import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SendButtonProps } from '@/types/props'
import { useTailwind } from 'tailwind-rn'
import { Feather } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics';

const SendButton = ({onPress}: SendButtonProps) => {
    const tw = useTailwind();
    const handlePress = () => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      onPress?.();
    }
  return (
    <TouchableOpacity onPress={handlePress} style={tw('rounded-full bg-violet-800 p-3 mx-4')}>
      <Feather name="send" color="white" size={18} />
    </TouchableOpacity>
  )
}

export default SendButton