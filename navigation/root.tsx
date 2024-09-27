import { selectUser } from "@/store/slices/user";
import { Stack } from "expo-router";
import { useSelector } from "react-redux";

export default function RootNavigation() {
    const user = useSelector(selectUser);
    return <>
        {user === null ? <>
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />
                <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
            </>
            : <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        }
        <Stack.Screen name="+not-found" />
    </>
}