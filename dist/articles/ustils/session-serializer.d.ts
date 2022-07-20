import { PassportSerializer } from "@nestjs/passport";
import { UserService } from "../../user/user.service";
export declare class SessionSerializer extends PassportSerializer {
    private readonly userService;
    constructor(userService: UserService);
    serializeUser(user: any, done: Function): void;
    deserializeUser(payload: any, done: Function): void;
}
