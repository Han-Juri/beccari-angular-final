export interface Comission {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface CreateComissionData {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface UpdateComissionData {
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
}