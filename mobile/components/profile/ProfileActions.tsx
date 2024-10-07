import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { useTailwind } from 'tailwind-rn'
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import ProfilePopup from './ProfilePopup';

interface ProfileActionIconProps {
    onPress?: () => void;
    children: React.ReactNode;
}

interface ProfileActionMoreProps {
    onPress?: () => void;
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

function ProfileActionMore({onPress}: ProfileActionMoreProps) {
    const tw = useTailwind();
    const [visible, setVisible] = useState(false);

    const handlePress = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      setVisible(prev => !prev)
      onPress?.();
    }

    const handleClose = () => {
      setVisible(false);
    }
  return (
    <TouchableOpacity onPress={handlePress} style={tw('relative mx-4 z-50')}>
      <Feather name='more-horizontal' color="white" size={24} />
      {visible && <ProfilePopup close={handleClose}/>}
    </TouchableOpacity>
  )
}

const ProfileActions = () => {
  const tw = useTailwind();

  const handleQRCodeScan = () => {
    router.navigate('/(app)/qrcode-scanner');
  }
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
        <ProfileActionIcon onPress={handleQRCodeScan}>
            <FontAwesome name='qrcode' color="white" size={24} />
        </ProfileActionIcon>
        <ProfileActionMore />
    </View>
  )
}

export default ProfileActions
