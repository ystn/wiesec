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
import Form from "@/components/form";
import FormInput from "@/components/form/input";
import { SignUpSchema, SignUpSchemaType } from "@/schemas/signup";
import { useFormContext } from "react-hook-form";
import { useSignupMutation } from "@/store/api/auth";
import FormButton from "@/components/form/button";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/user";

interface SignupFormProps {
    handleSignup: (values: SignUpSchemaType) => void;
}

function Step1() {
    return <>
        <FormInput name="first_name" placeholder="First name" type="text"/>
        <FormInput name="last_name" placeholder="Last name" type="text"/>
        <FormInput name="birthday" placeholder="Birthday" type="date"/>
    </>
}

function Step2() {
    return <>
        <FormInput name="email" placeholder="Email" type="email"/>
        <FormInput name="phone" placeholder="Phone number" type="phone"/>
        <FormInput name="password" placeholder="Password" type="new-password"/>
        <FormInput name="confirm_password" placeholder="Confirm password" type="password"/>
    </>
}

function SignupForm({handleSignup}: SignupFormProps) {
    const tw = useTailwind();
    const { trigger } = useFormContext();
    const totalSteps = 2;
    const fields = [["first_name", "last_name", "birthday"], ["email", "phone", "password", "confirm_password"]]
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
        router && router.navigate('/sign-in');
    }

    const handleNext = async () => {
        if(!isLastStep) {
            const valid = await trigger(fields[step - 1])
            if(valid)
                nextStep();
        } else {
            // handleSignup()
        }
    }

    return <>
        <Stepper steps={totalSteps} currentStep={step} onStepPress={setStep} />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
            
        <View style={tw('mt-auto')}>
            {isLastStep && <FormButton variant="primary" onPress={handleSignup} title={isLastStep ? "Sign up" : "Next"} />}
            {!isLastStep && <Button variant="primary" onPress={handleNext} title={isLastStep ? "Sign up" : "Next"} />}
            <View style={tw("flex flex-row items-center justify-center self-center mt-4")}>
                <Text variant="link">Already have an account? </Text>
                <Button variant="link" onPress={handleSignin} title="Sign in" />
            </View>
        </View>
    </>
}

export default function () {
    const tw = useTailwind();
    const dispatch = useDispatch();
    // const [signup, signupResult] = useSignupMutation();
    const handleSignup = ({confirm_password, birthday, ...values}: SignUpSchemaType) => {
        console.log(values);
        dispatch(login({id: '1', first_name: 'John', last_name: 'Doe', birthday: new Date(1989, 3, 5).getTime(), picture: '', has_access: false}))
        router && router.replace('/qrcode');
        // signup({...values, birthday: birthday.getDate()})
    }

    return <Screen>
        <Form zodSchema={SignUpSchema} defaultValues={{birthday: new Date()}}>
            <SignupForm handleSignup={handleSignup} />
        </Form>
    </Screen>
}