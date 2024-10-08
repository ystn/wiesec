import { View, Text } from 'react-native'
import React from 'react'
import { MessageProps } from '@/types/props'
import { useTailwind } from 'tailwind-rn'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'
import Loading from '../atoms/loading'

const Message = ({message, prev, next, isLast}: MessageProps) => {
    const tw = useTailwind();
    const samePrev = prev && prev.sender === message.sender;
    const sameNext = next && next.sender === message.sender;
    const self = message.sender === 'self';
    const isPending = message.status === 'pending';
    const isSent = message.status === 'sent';
    const isRead = message.status === 'read'
  return (
    <View style={tw(`${self ? 'self-end items-end' : ''}`)}>
        <View style={tw(`rounded-2xl px-4 py-2 ${self ? 'bg-violet-800 rounded-br-none ml-12' : 'bg-gray-600 rounded-bl-none mr-12'} ${samePrev ? self ? 'rounded-tr-none' : 'rounded-tl-none' : ''} ${samePrev ? 'mt-1' : 'mt-4'} ${isLast ? 'mb-1' : ''}`)}>
            <Text style={tw('text-white')}>{message.content}</Text>
        </View>
      {(isLast && self) && (isPending ?
        <Loading size={16} />
      // <View><AntDesign name="loading1" color="white" size={16} /></View>
       : isSent ? <Ionicons name="checkmark" color="white" size={16} /> : isRead ? <Ionicons name="checkmark-done" color="#5b21b6" size={16} /> : null )}
    </View>
  )
}

export default Message
