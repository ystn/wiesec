import { selectSession } from "@/store/slices/user"
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";
import { useSelector } from "react-redux"
import { useTailwind } from "tailwind-rn";

export default () => {
    const {session, isLoading, value: user} = useSelector(selectSession);

    if(isLoading) return <Text>Loading...</Text>

    if(!session) return <Redirect href="/sign-in" />

    if(!user?.has_access) return <Redirect href="/qrcode" />

    return <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="qrcode-scanner" options={{headerShown: false}} />
    </Stack>
}
