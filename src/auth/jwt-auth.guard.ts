import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";


@Injectable()
export class JwtAuthGuard implements CanActivate{

    constructor( private jwtService: JwtService){

    }



    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()

        try{

            const authHeader = req.cookies.Authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if (bearer !== 'Bearer' || !token ){
                throw new UnauthorizedException({message: `Bearer: ${bearer}, token: ${token}`})
            }

            const user = this.jwtService.verify(token, {secret: 'secretkey'});
            req.user = user;
            return true


        } catch (e) {
            throw new UnauthorizedException({message: 'чтото пошло не так' })
        }


    }
}