import { Collection } from "@mikro-orm/core";
import { Articles } from "../articles/article.entity";
export declare class User {
    id: number;
    email: string;
    pass: string;
    uaerName: string;
    articlesCollection: Collection<Articles>;
}
