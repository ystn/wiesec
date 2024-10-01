import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import * as Haptics from 'expo-haptics'

interface BubbleProps {
  active?: boolean;
  number: number;
  onStepPress?: (step: number) => void;
}

const Bubble = ({ active, number, onStepPress }: BubbleProps) => {
  const tw = useTailwind();
  const handlePress = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    onStepPress?.(number);
  }
  return (
    <TouchableOpacity style={tw(`rounded-full h-14 w-14 items-center justify-center ${active ? 'bg-violet-800' : 'bg-gray-600'}`)} onPress={handlePress}>
      <Text style={tw('text-white text-lg')}>{number}</Text>
    </TouchableOpacity>
  )
}

export default Bubble