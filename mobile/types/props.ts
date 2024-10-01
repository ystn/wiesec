import { ReturnKeyTypeOptions } from "react-native";

type InputType = 'text' | 'email' | 'password' | 'new-password' | 'number' | 'phone' | 'date';

export interface ButtonProps<T> {
    onPress: () => void;
    title: string;
    variant?: 'primary' | 'secondary' | 'link' | 'default';
    style?: T;
    disabled?: boolean;
    loading?: boolean;
}

export interface InputProps<T> {
    onChange?: (text: T) => void;
    value?: T;
    onBlur?: () => void;
    onFocus?: () => void;
    placeholder?: string;
    type?: InputType;
    small?: boolean;
    returnKeyType?: ReturnKeyTypeOptions;
}

export interface TextProps {
    children?: string;
    variant?: 'info' | 'default' | 'link';
}

export interface ScreenProps {
    children?: React.ReactNode;
    small?: boolean;
    safe?: 'all' | 'top' | 'bottom';
}

export interface NumberFieldProps {
    next?: any;
    previous?: any;
    value?: string;
    onChange?: (value: string) => void;
}

export interface OtpProps {
    value?: string;
    onChange?: (value: string) => void;
}

export interface QrScannerProps {
    onBarcodeScanned?: (scanningResult: string) => void
}

export interface SendButtonProps {
    onPress?: () => void;
}

export interface MessageProps {
    message: Message;
    prev?: Message;
    next?: Message;
    isLast?: boolean;
}

export interface ProfileProps {
    big?: boolean;
}

export interface SettingListProps {
    settingList: SettingList
}