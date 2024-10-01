import React, { useRef } from 'react'
import NumberField from './number-field'
import { View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

const Otp = ({value, onChange}: OtpProps) => {
    const tw = useTailwind();

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    return (
        <View style={tw("flex flex-row items-stretch justify-between h-16")}>
            <NumberField ref={ref1} next={ref2} />
            <NumberField ref={ref2} previous={ref1} next={ref3} />
            <NumberField ref={ref3} previous={ref2} next={ref4} />
            <NumberField ref={ref4} previous={ref3} next={ref5} />
            <NumberField ref={ref5} previous={ref4} next={ref6} />
            <NumberField ref={ref6} previous={ref5} />
        </View>
  )
}

export default Otp;