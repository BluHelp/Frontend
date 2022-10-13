import { ProjectGet } from "./project-get";

export interface UserGet {
    id: number;
    name: string;
    surname: string;
    password: string;
    cpf: string;
    photo: string;
    email: string;
    phone: string;
    projects: Array<ProjectGet>;
}
