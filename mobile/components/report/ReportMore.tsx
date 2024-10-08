import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';

interface PhotoProps {
    count?: number;
    index?: number;
    image?: string;
}

interface PhotosProps {
    count: number;
}

const Photo = ({ count, index, image }: PhotoProps) => {
    const tw = useTailwind();
    let style;

    if (index)
        style = {position: 'absolute', left: index * 30};
    else 
        style = {};

    const colors = ['bg-gray-600', 'bg-gray-400', 'bg-gray-800'];
    const colorIndex = index ? index % colors.length : 0;
    const color = colors[colorIndex];

    if(count) 
        return (
            <View style={[tw(`h-16 w-16 ${color} rounded-full items-center justify-center border-2 border-red-500 z-0`), style]} >
                <Text style={tw('text-white text-lg')}>+{count}</Text>
            </View>
        )

    if(image)
        return (
            <Image source={{ uri: image }} style={[tw(`h-16 w-16 rounded-full ${color} border-2 border-red-500`), style]} />
        )

    return (
        <View style={[tw(`h-16 w-16 rounded-full ${color} border-2 border-red-500`), style]} />
    )
}

const Photos = ({count}: PhotosProps) => {
    const tw = useTailwind();
    const images = ['https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg', 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8', 'https://yt3.googleusercontent.com/Hl9kK-NU8An12fXWkjh_XjNejXSpkaQ17-Axgr2sHfLPSB7Ym2smhr1t-LL6U9IHUnRdpFBK1Q=s900-c-k-c0x00ffffff-no-rj']

    const elements = [...Array(Math.min(count, 3)).keys()];
    const plus = Math.max(0, count - 3);

    return <>
        {elements.map((value, index) => <Photo image={images[index]} index={index} key={index}/>)}
        {plus > 0 && <Photo count={plus} index={elements.length} />}
    </>
}

const ReportMore = () => {
    const tw = useTailwind();

    const handleMore = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        router && router.navigate('/(app)/(tabs)/home/reports');
    }

    return (
    <TouchableOpacity style={[tw('rounded-2xl bg-red-950/90 border-red-500 border-2 w-full p-4 flex-row my-4')]} onPress={handleMore}>
        <View style={[tw('w-32'), {position: 'relative'}]}>
            <Photos count={6} />
        </View>
        <Text style={tw('text-white self-center ml-10 font-semibold')}>More reports!</Text>
    </TouchableOpacity>
    )
}

export default ReportMore