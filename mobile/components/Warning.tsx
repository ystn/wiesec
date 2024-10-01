import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'

const Warning = () => {
    const tw = useTailwind();
  return (
    <View style={tw('rounded border')}>
    </View>
  )
}

export default Warning