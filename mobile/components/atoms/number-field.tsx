import { View, Text, TextInput } from 'react-native'
import React, { forwardRef } from 'react'
import { useTailwind } from 'tailwind-rn'

const NumberField = forwardRef(({next, previous, value, onChange}: NumberFieldProps, ref: React.ForwardedRef<TextInput>) => {
    const tw = useTailwind();

    const handleChange = (value: string) => {
        onChange?.(value);
        if(value.length >= 1) {
            next?.current?.focus();
        } else if(value.length === 0) {
            previous?.current?.focus();
        }
    }

    
  return (
    // <View style={tw('rounded-xl border-2 border-violet-800 flex items-center justify-center')}>
      <TextInput ref={ref} maxLength={1} value={value} onChangeText={handleChange} keyboardType='numeric' style={tw('border-2 border-violet-800 rounded-xl bg-white w-12 flex h-full items-center justify-center text-2xl text-center')} />
    // </View>
  )
})

export default NumberField