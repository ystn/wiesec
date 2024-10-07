import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import Screen from './Screen';
import ChatInput from '@/components/chat/ChatInput';
import MessageList from '@/components/chat/MessageList';
import ChatHeader from '@/components/chat/ChatHeader';

const Chat = () => {
    const tw = useTailwind();

  return (
      <Screen small safe='top'>
        {/* <ChatHeader /> */}
        <MessageList />
        <ChatInput />
      </Screen>
  )
}

export default Chat
