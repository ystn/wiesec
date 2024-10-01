import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import Text from "@/components/atoms/text";
import Stepper from "@/components/stepper";
import Screen from "@/screens/Screen";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import * as Haptics from 'expo-haptics';

function Step1() {
    return <>
        <Input placeholder="First name" type="text"/>
        <Input placeholder="Last name" type="text"/>
        <Input placeholder="Birthday" type="date" value={new Date()}/>
    </>
}

function Step2() {
    return <>
        <Input placeholder="Email" type="email"/>
        <Input placeholder="Password" type="new-password"/>
        <Input placeholder="Confirm password" type="password"/>
    </>
}

export default function () {
    const tw = useTailwind();
    const totalSteps = 3;
    const [step, setStep] = useState<number>(1);

    const isLastStep = step >= totalSteps;

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep((prev: number) => {
            if(step > 0) return prev--;
            return prev;
        })
    }

    const handleSignin = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        router && router.navigate('/sign-in');
    }

    const handleSignup = () => {
        if(!isLastStep) {
            nextStep();
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        } else {

        }
    }

    return <Screen>
        <Stepper steps={totalSteps} currentStep={step} onStepPress={setStep} />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        
        <View style={tw('mt-auto')}>
            <Button variant="primary" onPress={handleSignup} title={isLastStep ? "Sign up" : "Next"} />
            <View style={tw("flex flex-row items-center justify-center self-center mt-4")}>
                <Text variant="link">Already have an account? </Text>
                <Button variant="link" onPress={handleSignin} title="Sign in" />
            </View>
        </View>
    </Screen>
}