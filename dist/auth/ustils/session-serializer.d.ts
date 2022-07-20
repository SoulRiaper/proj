import { PassportSerializer } from "@nestjs/passport";
import { User } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
export declare class SessionSerializer extends PassportSerializer {
    private readonly userService;
    constructor(userService: UserService);
    serializeUser(user: User, done: (err: any, user: User) => void): void;
    deserializeUser(user: User, done: (err: any, user: User) => void): Promise<void>;
}
