import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import * as Haptics from 'expo-haptics'

interface ReportProps {
    user: User;
    message: string;
}

const Report = () => {
    const tw = useTailwind();

    const handleAllow = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    }

    const handleBlock = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    }

    return (
    <View style={tw('rounded-2xl bg-red-950/90 border-red-500 border-2 w-full p-4 my-2')}>
        <View style={tw('flex-row mb-4')}>
            <View style={tw('h-24 w-24 bg-gray-500 rounded-full')} />
            <View style={tw('px-4 py-2 flex-1')}>
                <Text style={tw('text-white font-bold text-lg')}>John Doe</Text>
                <Text style={tw('text-white text-wrap')} numberOfLines={3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
        </View>
        <View style={tw('flex-row')}>
            <TouchableOpacity style={tw('rounded-xl bg-green-800 border-2 border-green-500 flex-1 p-2 items-center mx-2')} onPress={handleAllow}>
                <Text style={tw('text-white')}>Allow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw('rounded-xl bg-red-800 border-2 border-red-500 flex-1 p-2 items-center mx-2')} onPress={handleBlock}>
                <Text style={tw('text-white')}>Block</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default Report