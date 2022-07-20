import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "../../user/user.entity";
import { UserService } from "../../user/user.service";

export class SessionSerializer extends PassportSerializer {

    constructor(
        private readonly userService: UserService,
    ){
        super();
    }



    serializeUser(user: User, done: (err, user: User) => void ) {
        console.log('Serialize User');
        done( null, user ); 
    }


    async deserializeUser(user: User, done: (err, user: User) => void ) {
        
        console.log('Deserialize User');
        
        const userDB = await this.userService.findById(user.id);
        return userDB ? done(null, userDB) : done(null, null);
    }

}