import { Category } from "./category";

export interface ProjectView {
    id: number;
    creator: number;
    creatorName: string;
    creatorSurname: string;
    title: string;
    objective: string;
    address: number;
    district: string;
    description: string;
    categories: Array<Category>,
    progress: number;
    photo: string;
    date: string;
    avarageReview: number;
}
