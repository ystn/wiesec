import { View, Text as RnText } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'

const Text = ({children, variant='default'}: TextProps) => {
    const tw = useTailwind();
  return (
    <RnText style={tw('text-gray-300 ')}>
        {children}
    </RnText>
  )
}

export default Text