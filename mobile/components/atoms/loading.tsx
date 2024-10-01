import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useTailwind } from 'tailwind-rn'
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated'

const Loading = () => {
    const tw = useTailwind();
    // const rotation = useRef(new Animated.Value(0, {useNativeDriver: true}));
    const rotation = useSharedValue(0);
    withTiming(rotation.value, {duration: 3000, easing: Easing.linear})
  return (
    <View style={tw('ml-4')}>
        <Animated.View style={{transform: [{rotate: rotation+'deg'}]}}>
            <AntDesign name="loading2" color="white" size={20} />
        </Animated.View>
    </View>
  )
}

export default Loading