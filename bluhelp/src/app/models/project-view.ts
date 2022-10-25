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
    category: Category,
    progress: number;
    photo: any;
    date: string;
    averageReview: number;
}
