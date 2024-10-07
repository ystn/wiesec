import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import * as Haptics from 'expo-haptics'
import { getFullName } from '@/utils';

interface ReportProps {
    report: Report;
}

const Report = ({ report }: ReportProps) => {
    const tw = useTailwind();
    const user = report.message.sender;
    const message = report.message.content;
    const reason = report.information;

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
                <View style={tw('pr-2 py-2 flex-1 text-wrap')}>
                    <Text style={tw('text-white font-bold text-lg')}>{getFullName(user)}</Text>
                    <Text style={tw('text-white text-wrap')} numberOfLines={3}>{message}</Text>
                </View>
                <View style={tw('pr-2 pt-2 flex-row flex-1')}>
                    <Text style={tw('text-white text-wrap flex-1')} numberOfLines={3}>
                        <Text style={tw('text-white font-bold text-wrap')}>Reason: </Text>
                        {reason}
                    </Text>
                </View>
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