import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';

interface WikiListItemProps {
    reverse?: boolean;
    article?: Article;
}

const WikiListItem = ({ reverse = false, article }: WikiListItemProps) => {
    const tw = useTailwind();

    const handlePress = () => {
        const id = article?.id || 1
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        router && router.navigate(`/(app)/(tabs)/wiki/${id}`)
    }

    return (
        <TouchableOpacity style={tw(`${reverse ? 'flex-row' : 'flex-row-reverse'} h-48`)} onPress={handlePress}>
            {article?.image ? <Image source={{ uri: article.image }} style={tw('flex-1 bg-neutral-950')} /> : <View style={tw('flex-1 bg-gray-500')} />}
            <View style={tw('items-start flex-1')}>
                <View style={tw('p-4')}>
                    <Text style={tw('text-xl font-bold text-white')}>{article?.title || 'Hello'}</Text>
                    <Text style={tw('text-wrap text-white')} numberOfLines={5}>{article?.description || 'Lorem impsum sit amet dolor equit.'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default WikiListItem
