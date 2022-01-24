import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
export declare class PostGroupBy {
    id: string;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    _count: PostCountAggregate | null;
    _min: PostMinAggregate | null;
    _max: PostMaxAggregate | null;
}
