interface User {
    name: string;
    surname: string;
    sex: "male" | "female";
    birth: number;
    picture: string;
}

interface Session {
    sessionId: string;
    ip: string;
    start: number;
}