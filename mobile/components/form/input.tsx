import { View, Text } from 'react-native'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import TextInput from '../atoms/input';
import { InputProps } from '@/types/props';
import { useTailwind } from 'tailwind-rn';

interface FormInputProps<T> extends InputProps<T> {
    name: string;
}

function FormInput<T>({name, placeholder, type = 'text', returnKeyType, small = false}: FormInputProps<T>) {
    const tw = useTailwind();
    const { control, formState: { errors } } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChange={onChange}
                    type={type}
                    returnKeyType={returnKeyType}
                    small={small}
                    value={value}
                />
                )}
                name={name}
            />
            {errors[name] && <Text style={tw('text-red-500')}>{ errors[name].message || 'This is required.' }</Text>}
        </>
    )
}

export default FormInput
