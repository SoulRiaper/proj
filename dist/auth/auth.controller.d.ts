import { Response } from 'express';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    loginRender(): Promise<any>;
    login(userDto: CreateUserDto, res: Response): Promise<string>;
    regGet(): Promise<void>;
    registration(userDto: CreateUserDto, res: Response): Promise<{
        token: string;
    }>;
}
