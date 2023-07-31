export interface Course {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface CreateCourseData {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface UpdateCourseData {
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
}