import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import Input from '../atoms/input';
import { Feather } from '@expo/vector-icons';
import SendButton from './SendButton';

const ChatInput = () => {
  const tw = useTailwind();

  const toggleModal = () => {}

  return (
    <View style={tw('flex flex-row items-center justify-around')}>
      <TouchableOpacity onPress={toggleModal} style={tw('mx-4')}>
        <Feather name='image' color='#5b21b6' size={24}/>
      </TouchableOpacity>
      <Input type="text" small placeholder='Type a message...' />
      <SendButton />
    </View>
  )
}

export default ChatInput