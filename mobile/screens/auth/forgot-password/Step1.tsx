import { View, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import Input from '@/components/atoms/input'
import Screen from '@/screens/Screen'
import Button from '@/components/atoms/button'
import { useTailwind } from 'tailwind-rn'
import { router } from 'expo-router'
import Text from '@/components/atoms/text'
import * as Haptics from 'expo-haptics'

const Step1 = () => {
  const tw = useTailwind();

  const handleSendEmail = () => {
    router && router.navigate('/forgot-password/step2');
  }

  const handleSignin = () => {
    router && router.navigate('/sign-in');
  }

  return (
    <Screen>
      <Input placeholder="Email" type="email"/>
      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw('mt-auto')}>
          <Button variant="primary" onPress={handleSendEmail} title="Send email" />
          <View style={tw("flex flex-row items-center justify-center self-center mt-4")}>
              <Text variant="link">Already have an account? </Text>
              <Button variant="link" onPress={handleSignin} title="Sign in" />
          </View>
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default Step1