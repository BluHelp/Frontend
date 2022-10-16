export interface Project {
    id: number;
    creator: number;
    address: number;
    title: string;
    objective: string;
    description: string;
    categories: Array<number>;
    photo: string;
    street: string;
    number: number;
    district: string;
    cep: string;
    reference: string;

}
