import { View, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import Screen from '@/screens/Screen'
import Button from '@/components/atoms/button'
import { useTailwind } from 'tailwind-rn'
import { router } from 'expo-router'
import Text from '@/components/atoms/text'
import Otp from '@/components/atoms/otp'
import * as Haptics from 'expo-haptics'

const Step2 = () => {
  const tw = useTailwind();

  const handleSendEmail = () => {
    router
  }

  const handleSignin = () => {
    router && router.navigate('/sign-in');
  }

  return (
    <Screen>
      <Otp placeholder="Verification code"/>
      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw('mt-auto')}>
          <Button variant="primary" onPress={handleSendEmail} title="Confirm" />
          <View style={tw("flex flex-row items-center justify-center self-center mt-4")}>
              <Text variant="link">Already have an account? </Text>
              <Button variant="link" onPress={handleSignin} title="Sign in" />
          </View>
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default Step2