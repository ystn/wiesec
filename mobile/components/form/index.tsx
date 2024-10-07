import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


interface FormProps {
    children: React.ReactNode;
    zodSchema: any;
    defaultValues?: any;
}

const Form = ({children, zodSchema, defaultValues}: FormProps) => {
    const methods = useForm({ resolver: zodResolver(zodSchema), defaultValues});

    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    )
}

export default Form
