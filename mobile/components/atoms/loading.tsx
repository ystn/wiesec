import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useTailwind } from 'tailwind-rn'
import Animated, { Easing, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

interface LoadingProps {
  size?: number;
  color?: string;
}

const Loading = ({size=20, color="white"}: LoadingProps) => {
    const tw = useTailwind();
    // const rotation = useRef(new Animated.Value(0, {useNativeDriver: true}));
    const animation = useSharedValue(0);
    const rotation = useDerivedValue(() => {
      return interpolate(animation.value, [0, 360], [0, 360])
    })
    const animationStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            rotate: rotation.value + 'deg',
          }
        ]
      }
    })

    const startAnimation = () => {
      animation.value = withRepeat(withTiming(360, { duration: 1000 }), -1, false);
    }

    useEffect(() => {
      startAnimation();
    }, [])


    // withTiming(rotation.value, {duration: 3000, easing: Easing.linear})
  return (
    <View style={tw('ml-4')}>
        <Animated.View style={animationStyle}>
            <AntDesign name="loading2" color={color} size={size} />
        </Animated.View>
    </View>
  )
}

export default Loading
