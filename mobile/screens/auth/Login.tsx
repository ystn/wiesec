import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import Text from "@/components/atoms/text";
import Screen from "@/screens/Screen";
import { login, selectSession } from "@/store/slices/user";
import { router } from "expo-router";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTailwind } from "tailwind-rn";
import * as Haptics from 'expo-haptics';
import Form from "@/components/form";
import FormInput from "@/components/form/input";
import { SignInSchema } from "@/schemas/signin";
import FormButton from "@/components/form/button";
import { useLoginMutation } from "@/store/api/auth";

export default function () {
    const tw = useTailwind();
    const dispatch = useDispatch();
    const { isLoading } = useSelector(selectSession);
    // const [login, loginResult] = useLoginMutation()
    // const { data: loginData, isLoading } = loginResult

    const handleForgotPassword = () => {
        router && router.navigate('/forgot-password/step1');
    }

    const handleSignin = (values) => {
        // dispatch(login({id: '1', name: 'John', last_name: 'Doe', birthday: new Date(1989, 3, 5).getTime(), sex: 'male', picture: '', has_access: true}));
        dispatch(login({id: '1', first_name: 'John', last_name: 'Doe', birthday: new Date(1989, 3, 5).getTime(), picture: '', has_access: true}));
        // console.log("values", values);
        // login(values);
        // console.log("data", loginResult.data)

        router.replace('/');
    }

    const handleSignup = () => {
        router && router.navigate('/sign-up');
    }

    return <Screen>
        <Form zodSchema={SignInSchema}>
            <FormInput name="username" placeholder="Email" type="email" returnKeyType="next"/>
            <FormInput name="password" placeholder="Password" type="password"/>
            <Button variant="link" onPress={handleForgotPassword} title="Forgot password?" style={tw("self-end mt-0")}/>
            <View style={tw('mt-auto')}>
                {/* <FormButton variant="primary" onPress={handleSignin} title="Sign in" loading={loginResult.isLoading} /> */}
                <FormButton variant="primary" onPress={handleSignin} title="Sign in" loading={isLoading} />
                <View style={tw("flex flex-row items-center justify-center self-center mt-4")}>
                    <Text variant="link">Don't have an account? </Text>
                    <Button variant="link" onPress={handleSignup} title="Sign up" />
                </View>
            </View>
        </Form>
    </Screen>
}
