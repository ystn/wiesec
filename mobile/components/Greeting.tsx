import { View, Text } from 'react-native'
import React from 'react'
import { getFullName } from '@/utils'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/slices/user'
import { useTailwind } from 'tailwind-rn'

const Greeting = () => {
    const tw = useTailwind();
    const user = useSelector(selectUser);
    const fullName = getFullName(user);

    return (
        <View style={tw('mt-4 mb-8')}>
            <Text style={tw('text-white text-3xl font-bold')}>Hi, {fullName}!</Text>
        </View>
    )
}

export default Greeting