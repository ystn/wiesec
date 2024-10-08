import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import Bubble from './Bubble';

interface SeparatorProps {
    active?: boolean;
}

interface StepperProps {
    steps: number;
    currentStep: number;
    onStepPress?: (step: number) => void;
}

const Separator = ({active}: SeparatorProps) => {
    const tw = useTailwind();
    return <View style={tw(`${active ? 'bg-violet-800' : 'bg-gray-600'} h-1 flex-1 w-full`)} />
}

const Stepper = ({steps, currentStep, onStepPress}: StepperProps) => {
  const tw = useTailwind();
  const arr = [...Array(steps).keys()];

  function handleStepPress(step: number) {
    if(step <= currentStep) onStepPress?.(step);
  }
  return (
    <View style={tw('flex-row items-center m-4')}>
      {arr.map((value, index) => {
        const isFirst = value == 0;
        const isLast = value >= steps - 1;
        return <>
            {!isFirst && <Separator active={value + 1 <= currentStep} key={index + arr.length} />}
            <Bubble onStepPress={handleStepPress} number={value + 1} currentStep={currentStep} key={index} />
            {/* {!isLast && <Separator active={value + 1 < currentStep} key={index + arr.length} />} */}
        </>
      })}
    </View>
  )
}

export default Stepper