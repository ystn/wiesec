import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';

interface ProfilePopupProps {
    close: () => void;
}

const ProfilePopup = ({close}: ProfilePopupProps) => {
    const tw = useTailwind();

    const handleChildrenPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        close();
        router && router.navigate('/(app)/(tabs)/profile/children')
    }
    return (
        <View style={tw('absolute right-0 top-8 w-32 bg-white py-4 rounded-xl z-50')}>
            <TouchableOpacity style={tw('px-4 py-2 flex-row items-center')} onPress={handleChildrenPress}>
                <Feather name="users" color="black" size={20} />
                <Text style={tw('text-black mx-2')}>Children</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfilePopup
