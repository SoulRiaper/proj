import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { request } from "http";
import { Observable } from "rxjs";



export class LocalAuthGuard extends AuthGuard(){
    async canActivate(context: ExecutionContext){
        const result = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest();
        await super.logIn(request);
        return result
    }
}