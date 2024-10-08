import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Screen from '@/screens/Screen'
import { useTailwind } from 'tailwind-rn'
import ParallaxScrollView from '../ParallaxScrollView'
import { Ionicons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { articles } from '@/assets/articles'

const WikiPage = () => {
    const tw = useTailwind();
    const { id } = useLocalSearchParams();
    const article = articles[parseInt(id)];

    const handleGoBack = () => {
        router && router.back();
    }

    return (
        // <Screen small>
            // {/* <ScrollView> */}
            <ParallaxScrollView
                headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
                headerImage={
                    <Image
                        source={{ uri: article.image }}
                        style={tw('bottom-0 left-0 absolute h-64 w-full')}
                    />
                }>
                <View style={tw('flex-row items-center mb-8')}>
                    <TouchableOpacity style={tw('self-end p-2 items-center justify-start rounded-full bg-white mr-8')} onPress={handleGoBack}>
                        <Ionicons name='arrow-back' color={'black'} size={24} />
                    </TouchableOpacity>
                    <Text style={tw('text-4xl font-bold text-white')}>{article.title}</Text>
                </View>
                <Text style={tw('text-gray-400 my-4')}>{article.date} | By {article.publisher}</Text>
                <Text style={tw('text-white my-2')}>
                    {article.description}
                </Text>
                {/* <Text style={tw('text-white my-2')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text style={tw('text-white my-2')}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text> */}
            </ParallaxScrollView>
        // </Screen>
    )
}

export default WikiPage
