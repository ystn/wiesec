interface User {
    id: string;
    name: string;
    last_name: string;
    sex: "male" | "female";
    birth: number;
    picture: string;
    has_access: boolean;
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

interface Avatar {
    onPress?: () => void;
    id: string;
    full_name: string;
    image?: string;
    icon?: any;
    onDelete?: () => void;
    navigate?: string;
}

interface AvatarList {
    title?: string;
    avatars: Avatar[];
}

interface Article {
    id: number;
    title: string;
    description: string;
    publisher: string;
    date: string;
    image: string;
}
