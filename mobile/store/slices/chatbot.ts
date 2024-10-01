import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { createSession } from "@/api/session";

interface ChatbotState {
    messages: Message[];
    lastMessage: Message | null;
}

const initialState: ChatbotState = {
    messages: [],
    lastMessage: null,
}

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<Message>) => {
            const isPending = state.lastMessage?.status === "pending";
            if(!isPending) {
                state
                state.lastMessage = action.payload
                state.lastMessage.status = 'pending'
                // send message
                state.lastMessage.status = 'sent'
            }

        },
        receiveMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload)
        }
    }
})

export const { sendMessage, receiveMessage } = chatbotSlice.actions;

export function selectMessages(state: RootState) {
    return state.chatbot.messages;
}

export function selectLastMessage(state: RootState) {
    return state.chatbot.lastMessage;
}

export default chatbotSlice;