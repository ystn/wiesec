import React from 'react'
import { Stack } from 'expo-router'
import { useTailwind } from 'tailwind-rn'

const Wiki = () => {
  const tw = useTailwind();

  return (
    <Stack screenOptions={{
      // tabBarActiveTintColor: '#5b21b6',
      // tabBarActiveBackgroundColor: '#0a0a0a',
      // tabBarInactiveBackgroundColor: '#0a0a0a',
      headerTintColor: '#0a0a0a',
      statusBarColor: '#0a0a0a',
      navigationBarColor: '#0a0a0a',
      headerTitleStyle: tw('text-white text-3xl'), headerStyle: tw('bg-neutral-950'), headerBackTitleVisible: false
    }}>
      <Stack.Screen name="index" options={{title: "Wiki"}} />
      <Stack.Screen name="[id]" options={{headerShown: false}} />
    </Stack>
  )
}

export default Wiki
