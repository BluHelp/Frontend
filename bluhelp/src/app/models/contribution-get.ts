export interface ContributionGet {
    id: number;
    content: string;
    user: UserContribution;
    date: string;
}
export interface UserContribution{
    id: number;
    name: string;
    surname: string;
    photo: string;
}
