export interface Student {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    comissionID: number;
}

export interface CreateStudentData {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface UpdateStudentData {
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
}