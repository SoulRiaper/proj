import { IdentifiedReference } from "@mikro-orm/core";
import { User } from "../user/user.entity";
export declare class Articles {
    _id: number;
    user: IdentifiedReference<User>;
    title?: string;
    content?: string;
    image?: string;
    constructor(user: User);
}
