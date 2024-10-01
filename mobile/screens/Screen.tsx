import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import { useKeyboard } from '@/hooks/useKeyboard';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenProps } from '@/types/props';

interface SafeScreenProps {
  safe?: 'all' | 'top' | 'bottom';
  children?: React.ReactNode;
}

const SafeScreen = ({safe='all', children}: SafeScreenProps) => {
  const tw = useTailwind();
  const insets = useSafeAreaInsets();
  const safeAll = safe === 'all';
  const safeTop = safe === 'top';
  const safeBottom = safe === 'bottom';

  if(safeAll) return <SafeAreaView style={tw('bg-neutral-950 h-full')}>
    {children}
  </SafeAreaView>

  return <View style={[tw('bg-neutral-950 h-full'), {paddingTop: safeTop ? insets.top : 0, paddingBottom: safeBottom ? insets.bottom : 0}]}>
    {children}
  </View>
}

const Screen = ({children, safe='all', small=false}: ScreenProps) => {
    const tw = useTailwind();
    const keyboardHeight = useKeyboard();
    console.log(keyboardHeight)
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw(`flex-1`)}>
      <SafeScreen safe={safe}>
        <View style={tw(`flex flex-col items-stretch h-full flex-1 ${!small ? 'p-8' : ''}`)}>
          {children}
        </View>
      </SafeScreen>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default Screen