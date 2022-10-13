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
    //List<CategoryProjection> categories
    //progress: Progress
    photo: string;
    //LocalDateTime date
    avarageReview: number;
}
