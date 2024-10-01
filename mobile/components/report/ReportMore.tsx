import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import * as Haptics from 'expo-haptics';

interface PhotoProps {
    count?: number;
    index?: number;
}

interface PhotosProps {
    count: number;
}

const Photo = ({ count, index }: PhotoProps) => {
    const tw = useTailwind();
    let style;

    if (index)
        style = {position: 'absolute', left: index * 20};
    else 
        style = {};

    const colors = ['bg-gray-600', 'bg-gray-400', 'bg-gray-800'];
    const colorIndex = index ? index % colors.length : 0;
    const color = colors[colorIndex];

    if(count) 
        return (
            <View style={[tw(`h-16 w-16 ${color} rounded-full items-center justify-center`), style]} >
                <Text style={tw('text-white text-lg')}>+{count}</Text>
            </View>
        )

    return (
        <View style={[tw(`h-16 w-16 rounded-full ${color}`), style]} />
    )
}

const Photos = ({count}: PhotosProps) => {
    const tw = useTailwind();

    const elements = [...Array(Math.min(count, 3)).keys()];
    const plus = Math.max(0, count - 3);

    console.log(elements)

    return <>
        {elements.map((value, index) => <Photo index={index} key={index}/>)}
        {plus > 0 && <Photo count={plus} index={elements.length} />}
    </>
}

const ReportMore = () => {
    const tw = useTailwind();

    const handleMore = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    return (
    <TouchableOpacity style={[tw('rounded-2xl bg-red-950/90 border-red-500 border-2 w-full p-4 flex-row my-4')]} onPress={handleMore}>
        <View style={[tw('w-32'), {position: 'relative'}]}>
            <Photos count={6} />
        </View>
        <Text style={tw('text-white self-center ml-4 font-semibold')}>More reports!</Text>
    </TouchableOpacity>
    )
}

export default ReportMore