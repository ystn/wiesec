import { useTailwind } from "tailwind-rn"
import { TextInput, TouchableOpacity, View } from "react-native";
import { getKeyboardType } from "@/utils";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Text from "./text";
import { InputProps } from "@/types/props";

export default function Input<T>({onBlur, onChange, onFocus, placeholder, value, type = 'text', returnKeyType, small = false}: InputProps<T>) {
    const tw = useTailwind();
    const password = type === 'password' || type === 'new-password';
    const [visible, setVisible] = useState<boolean>(false);
    const toggleVisibility = () => {
        setVisible((prev: boolean) => !prev);
    }

    let passwordRules = undefined;
    if(type === 'new-password')
        passwordRules = "required: upper; required: lower; required: digit; minlength: 8;";

    if(type === 'date')
        return <View style={tw(`bg-white rounded-full ${!small ? 'px-8 h-14 w-full' : 'px-2 h-8 flex-1'} my-4 flex flex-row items-center`)}>
            <Text>{placeholder}</Text>
            <RNDateTimePicker accentColor="#5b21b6" mode="date" minimumDate={new Date(1900, 0, 1)} value={value} onChange={onChange}/>
        </View>

    return <View style={tw(`bg-white rounded-full ${!small ? 'px-8 h-14 w-full' : 'px-2 h-10 flex-1'} my-4 flex flex-row`)}>
        <TextInput style={tw(`flex-1 ${!small ? 'h-14' : 'h-10'}`)} placeholderTextColor='gray' onChangeText={onChange} onBlur={onBlur} placeholder={placeholder} value={value} onFocus={onFocus} secureTextEntry={password && !visible} keyboardType={getKeyboardType(type)} passwordRules={passwordRules} returnKeyType={returnKeyType}/>
        {password && <TouchableOpacity onPress={toggleVisibility} style={tw('justify-center')}><Feather name={visible ? "eye-off" : "eye"} size={20}/></TouchableOpacity>}
    </View>
}
