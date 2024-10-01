import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import Text from "@/components/atoms/text";
import Screen from "@/screens/Screen";
import { login } from "@/store/slices/user";
import { router } from "expo-router";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useTailwind } from "tailwind-rn";
import * as Haptics from 'expo-haptics';

export default function () {
    const tw = useTailwind();
    const dispatch = useDispatch();

    const handleForgotPassword = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        router && router.navigate('/forgot-password/step1');
    }

    const handleSignin = () => {
        dispatch(login({id: '1', name: 'John', last_name: 'Doe', birth: new Date(1989, 3, 5).getTime(), sex: 'male', picture: ''}));
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        router.replace('/');
    }

    const handleSignup = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        router && router.navigate('/sign-up');
    }

    return <Screen>
        <Input placeholder="Email" type="email" returnKeyType="next"/>
        <Input placeholder="Password" type="password"/>
        <Button variant="link" onPress={handleForgotPassword} title="Forgot password?" style={tw("self-end mt-0")}/>
        <View style={tw('mt-auto')}>
            <Button variant="primary" onPress={handleSignin} title="Sign in" />
            <View style={tw("flex flex-row items-center justify-center self-center mt-4")}>
                <Text variant="link">Don't have an account? </Text>
                <Button variant="link" onPress={handleSignup} title="Sign up" />
            </View>
        </View>
    </Screen>
}