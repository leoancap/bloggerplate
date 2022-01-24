import { Tag } from "../models/Tag";
import { User } from "../models/User";
import { PostCount } from "../resolvers/outputs/PostCount";
export declare class Post {
    id: string;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    tags?: Tag[];
    user?: User;
    userId: string;
    _count?: PostCount | null;
}
