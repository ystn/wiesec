import { View, Text, Image } from 'react-native'
import React from 'react'
import { ProfileProps } from '@/types/props'
import { useTailwind } from 'tailwind-rn'
import ProfileActions from './ProfileActions'
import { Feather } from '@expo/vector-icons'
import SettingList from '../settings/SettingList'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/slices/user'
import { getFullName } from '@/utils'

const Profile = ({big}: ProfileProps) => {
    const tw = useTailwind();
    const user = useSelector(selectUser);
    const fullName = getFullName(user);
    const settings: SettingList = {
        title: 'Social accounts',
        settings: [
            {
                name: 'Facebook',
                icon: <Feather name='facebook' color='white' size={24} />
            },
            {
                name: 'Add new account',
                icon: <Feather name="plus" color="white" size={24} />
            }
        ]
    }

    if(big)
        return (
            <View style={tw('items-center flex-1')}>
                <Image style={tw('rounded-full bg-gray-600 h-48 w-48 my-8')} source={require('@/assets/images/profile.jpg')} resizeMode='cover'/>
                <Text style={tw('font-bold text-lg text-white')}>{fullName}</Text>
                <ProfileActions />
                <SettingList settingList={settings} />
            </View>
        )
}

export default Profile
