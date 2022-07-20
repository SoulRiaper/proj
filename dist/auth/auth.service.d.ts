import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    private validateUser;
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    regisration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
}
