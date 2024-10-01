import Login from "@/screens/auth/Login";
import { login } from "@/store/slices/user";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux"
import { useTailwind } from "tailwind-rn";

export default () => {

    const dispatch = useDispatch();
    const tw = useTailwind();

    return <Login />
            // <StatusBar style="auto" />
            // {/* <Button onPress={() => {dispatch(login({name: 'John', surname: 'Doe', birth: new Date(1989, 3, 5).getTime(), sex: 'male', picture: ''})); router.replace('/')}} title="Signin"/> */}
}