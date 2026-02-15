export interface User {
    id: number;
    email: string;
    role: string;
}

export interface MoodLog {
    id?: number;
    moodScore: number;
    notes: string;
    date?: string;
    user?: User;
}

export interface AuthResponse {
    token: string;
    email: string;
}
