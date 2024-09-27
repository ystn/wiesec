import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useSelector } from 'react-redux';
import { selectSession } from '@/store/slices/user';
import { useSession } from '@/utils/ctx';


export default function AppLayout() {
    //   const { session, isLoading } = useSelector(selectSession);
    const {session, isLoading} = useSelector(selectSession);
    // const {session, isLoading} = useSession();
    console.log("session", session);
    console.log("!session", !session);
    console.log("isLoading", isLoading);

    // You can keep the splash screen open, or render a loading screen like we do here.
      if (isLoading) {
        return <Text>Loading...</Text>;
      }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!session) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        console.log('sigin 1')
        return <Redirect href="/sign-in" />;
    }

    // This layout can be deferred because it's not the root layout.
    return <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack> ;
}
