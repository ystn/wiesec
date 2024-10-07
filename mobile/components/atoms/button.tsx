import { cv } from "@/utils";
import { AntDesign } from "@expo/vector-icons";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { useTailwind } from "tailwind-rn";
import Loading from "./loading";
import { ButtonProps } from "@/types/props";

const variants = cv({
    'primary': "rounded bg-violet-700 text-white",
    "secondary": "",
    "link": ""
})

export default function ({onPress, title, variant='default', style, disabled = false, loading = false}: ButtonProps<StyleProp<ViewStyle>>) {
    const tw = useTailwind();
    const bgStyle = variant === 'primary' ? "rounded-full bg-violet-800 h-14 flex flex-row items-center justify-center" : variant === 'secondary' ? 'rounded-full border-violet-800 h-14 flex flex-row items-center justify-center' : ''
    const fgStyle = variant === 'primary' ? "text-white text-lg" : variant === 'secondary' ? '' : 'text-gray-300 underline'
    const disabledStyle = (disabled || loading) ? tw('opacity-50') : {};

    return <TouchableOpacity onPress={onPress} disabled={disabled}>
        {/* <View style={tw(variants(variant))}> */}
        <View style={[tw(bgStyle), style, disabledStyle]}>
            {loading && <Loading size={24} />}
            {!loading && <Text style={tw(fgStyle)}>{title}</Text>}
        </View>
    </TouchableOpacity>
}
