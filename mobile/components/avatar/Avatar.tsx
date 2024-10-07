import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn';
import * as Haptics from 'expo-haptics';
import { Feather } from '@expo/vector-icons';
import { Href, router } from 'expo-router';

interface AvatarProps {
    item: Avatar;
    index: number;
    isLast: boolean;
}

const Avatar = ({item, index, isLast}: AvatarProps) => {
    const tw = useTailwind();

    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        item.onPress?.();
        item.navigate && router && router.navigate(item.navigate as Href<string>);
    }

    const handleDelete = () => {
        item.onDelete?.();
    }
  return (
    <>
        <TouchableOpacity onPress={handlePress} style={tw('flex-row p-4 items-center')}>
            <View style={tw('flex-1 flex-row items-center')}>
                <View style={tw('mr-4')}>
                    { item?.icon || <View style={tw('rounded-full w-16 h-16 bg-gray-500')} /> }
                    {/* {item.image ? <Image source={require(item.image)} /> : <View style={tw('rounded-full w-16 h-16 bg-gray-500')} />} */}
                </View>
                <Text style={tw('text-white')}>{item.full_name}</Text>
            </View>
            {item.onDelete && <TouchableOpacity onPress={handleDelete} style={tw('items-center justify-center p-6')}>
                    <Feather name="trash" color="white" size={20} />
                </TouchableOpacity>}
        </TouchableOpacity>
        {!isLast && <View style={tw('border-2 rounded-full border-gray-700')} />}
    </>
  )
}

export default Avatar
