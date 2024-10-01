import { selectSession } from "@/store/slices/user"
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";
import { useSelector } from "react-redux"

export default () => {
    const {session, isLoading} = useSelector(selectSession);
    console.log(session)

    if(isLoading) return <Text>Loading...</Text>

    if(!session) return <Redirect href="/sign-in" />

    return <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
}