import { StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import Button from '../atoms/button';
import { useFormContext } from 'react-hook-form';
import { ButtonProps } from '@/types/props';

const FormButton = ({onPress, title, variant='default', style, disabled = false, loading = false}: ButtonProps<StyleProp<ViewStyle>>) => {
    const {handleSubmit} = useFormContext();
    return (
        <Button onPress={handleSubmit(onPress)} title={title} variant={variant} style={style} disabled={disabled} loading={loading} />
    )
}

export default FormButton
