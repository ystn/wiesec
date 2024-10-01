import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useTailwind } from 'tailwind-rn'
import * as Haptics from 'expo-haptics';

interface ProfileActionIconProps {
    onPress?: () => void;
    children: React.ReactNode;
}

function ProfileActionIcon({onPress, children}: ProfileActionIconProps) {
    const tw = useTailwind();

    const handlePress = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress?.();
    }
  return (
    <TouchableOpacity onPress={handlePress} style={tw('mx-4')}>
      {children}
    </TouchableOpacity>
  )
}

const ProfileActions = () => {
    const tw = useTailwind();
  return (
    <View style={tw('my-4 mb-8 flex-row')}>
        <ProfileActionIcon>
            <Feather name='user' color="white" size={24} />
        </ProfileActionIcon>
        <ProfileActionIcon>
            <Feather name='mail' color="white" size={24} />
        </ProfileActionIcon>
        <ProfileActionIcon>
            <Feather name='settings' color="white" size={24} />
        </ProfileActionIcon>
        <ProfileActionIcon>
            <Feather name='more-horizontal' color="white" size={24} />
        </ProfileActionIcon>
    </View>
  )
}

export default ProfileActions