from dotenv import load_dotenv
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_core.chat_history import InMemoryChatMessageHistory
from langchain_core.messages import HumanMessage
from langchain_core.messages import SystemMessage
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_google_genai import HarmBlockThreshold
from langchain_google_genai import HarmCategory
from langchain_core.prompts import ChatPromptTemplate

load_dotenv(".env")

safety_settings = {
    HarmCategory.HARM_CATEGORY_UNSPECIFIED: HarmBlockThreshold.BLOCK_NONE,
    HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT: HarmBlockThreshold.BLOCK_NONE,
    HarmCategory.HARM_CATEGORY_HATE_SPEECH: HarmBlockThreshold.BLOCK_NONE,
    HarmCategory.HARM_CATEGORY_HARASSMENT: HarmBlockThreshold.BLOCK_NONE,
    HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT: HarmBlockThreshold.BLOCK_NONE,
}

model = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash", safety_settings=safety_settings
)

messages = [
    SystemMessage(content="""As a compassionate and professional psychologist, your role is to provide emotional support and guidance to users of a harassment detection application. Users may come to you feeling vulnerable, confused, or distressed. Your objective is to:
        - Listen empathetically to their concerns and acknowledge their feelings.
        - Help them understand the nature of harassment and its emotional impacts.
        - Offer coping strategies to manage anxiety, stress, or trauma resulting from harassment.
        - Guide them on how to safely address and respond to harassment, including when to seek professional help or report incidents.
        - Maintain a tone that is non-judgmental, supportive, and reassuring, making sure to prioritize the user's emotional well-being and safety.
        Remember, your responses should empower users, helping them to feel heard, validated, and capable of taking action, while maintaining sensitivity to their unique circumstances.
    """),
    HumanMessage(content="{text}"),
]

prompt = ChatPromptTemplate.from_messages(messages)

store = {}


def get_session_history(session_id: str) -> BaseChatMessageHistory:
    if session_id not in store:
        store[session_id] = InMemoryChatMessageHistory()
    return store[session_id]


with_message_history = RunnableWithMessageHistory(model, get_session_history)
parser = StrOutputParser()
chain = prompt | with_message_history | parser
