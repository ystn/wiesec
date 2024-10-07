import { View, Text } from 'react-native'
import React from 'react'
import WikiScreen from '@/screens/Wiki'
import { Slot, Stack } from 'expo-router'
import { useTailwind } from 'tailwind-rn'

const Wiki = () => {
  const tw = useTailwind();

  return (
    <Stack screenOptions={{headerTitleStyle: tw('text-white text-3xl'), headerStyle: tw('bg-neutral-950'), headerBackTitleVisible: false}}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="reports" options={{ title: "Reports" }} />
    </Stack>
  )
}

export default Wiki
