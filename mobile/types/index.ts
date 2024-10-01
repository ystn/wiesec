interface User {
    id: string;
    name: string;
    last_name: string;
    sex: "male" | "female";
    birth: number;
    picture: string;
}

interface Session {
    sessionId: string;
    ip: string;
    start: number;
}

interface Message {
    id: string;
    content: string;
    sender: string;
    date: string;
    status: 'sent' | 'pending' | 'read';

}

interface Setting {
    onPress?: () => void;
    name: string;
    icon?: any;
}

interface SettingList {
    title: string;
    settings: Setting[];
}