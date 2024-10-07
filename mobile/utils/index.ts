import { KeyboardType } from "react-native";

export function cv<T>(variants: T) {
    return function(variant: keyof T) {
        return variants[variant];
    }
}

export function getKeyboardType(inputType: InputType): KeyboardType {
    switch(inputType) {
        case 'email':
            return 'email-address';
        case 'number':
            return 'numeric'
        case 'phone':
            return 'phone-pad';
        default:
            return 'default'
    }
}

export function getFullName(user: User | SocialUser | null) {
    if(user)
        return user.first_name + " " + user.last_name;
    return "there";
}