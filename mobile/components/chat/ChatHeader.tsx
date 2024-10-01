import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'

const ChatHeader = () => {
    const tw = useTailwind();
  return (
    <View>
      <Text style={tw('text-white')}>ChatHeader</Text>
    </View>
  )
}

export default ChatHeader