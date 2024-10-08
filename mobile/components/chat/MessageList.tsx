import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import Message from './Message';

const MessageList = () => {
    const tw = useTailwind();
  return (
    <ScrollView contentContainerStyle={tw('justify-end flex-1 items-start px-4')}>
      <Message message={{content: 'Hello! how can I help you today!', date: Date.now().toString(), sender: 'chatbot', status: 'read'}} />
      <Message message={{content: 'I am facing a problem in school', date: Date.now().toString(), sender: 'self', status: 'read'}} />
      <Message message={{content: 'Oh! don\'t worry dear I\'am here to help you! Tell me more about the situtation so I can guide in the correct direction', date: Date.now().toString(), sender: 'chatbot', status: 'read'}} prev={{content: 'Hello', date: Date.now().toString(), sender: 'self', status: 'read'}}/>
      {/* <Message message={{content: 'Hello', date: Date.now().toString(), sender: 'self', status: 'read'}} isLast />
      <Message message={{content: 'Hello', date: Date.now().toString(), sender: 'self', status: 'sent'}} isLast/>
      <Message message={{content: 'Hello', date: Date.now().toString(), sender: 'self', status: 'pending'}} isLast/> */}
    </ScrollView>
  )
}

export default MessageList